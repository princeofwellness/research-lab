import { defineEventHandler, readBody } from "h3"
import crypto from "crypto"
import { createClient } from "@supabase/supabase-js"

const EVENT_SLUG = "the-shift-feb-26"

function getServiceClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.SUPABASE_SERVICE_ROLE_KEY || ""
    )
}

function verifySignature(payload: string, signature: string | null, secret: string): boolean {
    if (!signature || !secret) return !secret
    const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex")
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const rawBody = JSON.stringify(body)
    const signature = getHeader(event, "x-cal-signature-256") || null
    const webhookSecret = process.env.CAL_WEBHOOK_SECRET || ""

    if (webhookSecret && !verifySignature(rawBody, signature, webhookSecret)) {
        throw createError({ statusCode: 401, statusMessage: "Invalid signature" })
    }

    const { triggerEvent, payload } = body
    const supabase = getServiceClient()

    await supabase.from("webhook_log").insert({
        source: "calcom",
        event_type: triggerEvent,
        payload: body,
        processed: false,
    })

    if (triggerEvent === "BOOKING_PAID" || triggerEvent === "BOOKING_CREATED") {
        const bookingUid = payload?.uid || payload?.bookingId?.toString()
        const attendeeEmail = payload?.attendees?.[0]?.email || payload?.responses?.email?.value || ""
        const attendeeName = payload?.attendees?.[0]?.name || payload?.responses?.name?.value || ""
        const amountCents = payload?.price ? Math.round(payload.price * 100) : 9900

        const { data: existing } = await supabase
            .from("bookings")
            .select("id")
            .eq("cal_booking_uid", bookingUid)
            .single()

        if (existing) {
            return { status: "duplicate", bookingUid }
        }

        const { data: eventData } = await supabase
            .from("events")
            .select("id, sold_seats, total_seats")
            .eq("slug", EVENT_SLUG)
            .single()

        if (!eventData) {
            throw createError({ statusCode: 404, statusMessage: "Event not found" })
        }

        if (eventData.sold_seats >= eventData.total_seats) {
            throw createError({ statusCode: 409, statusMessage: "Sold out" })
        }

        await supabase.from("bookings").insert({
            event_id: eventData.id,
            email: attendeeEmail,
            name: attendeeName,
            cal_booking_uid: bookingUid,
            status: "confirmed",
            amount_cents: amountCents,
            currency: "EUR",
        })

        await supabase
            .from("events")
            .update({ sold_seats: eventData.sold_seats + 1 })
            .eq("id", eventData.id)
    }

    if (triggerEvent === "BOOKING_CANCELLED") {
        const bookingUid = payload?.uid || payload?.bookingId?.toString()

        const { data: booking } = await supabase
            .from("bookings")
            .select("id, event_id, status")
            .eq("cal_booking_uid", bookingUid)
            .single()

        if (booking && booking.status === "confirmed") {
            await supabase
                .from("bookings")
                .update({ status: "cancelled" })
                .eq("id", booking.id)

            const { data: eventData } = await supabase
                .from("events")
                .select("id, sold_seats")
                .eq("id", booking.event_id)
                .single()

            if (eventData && eventData.sold_seats > 0) {
                await supabase
                    .from("events")
                    .update({ sold_seats: eventData.sold_seats - 1 })
                    .eq("id", eventData.id)
            }
        }
    }

    return { status: "ok" }
})
