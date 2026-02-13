import { defineEventHandler, getQuery } from "h3"
import { createClient } from "@supabase/supabase-js"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const slug = (query.slug as string) || "the-shift-feb-26"

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    )

    const { data, error } = await supabase
        .from("events")
        .select("name, total_seats, sold_seats, status, date")
        .eq("slug", slug)
        .single()

    if (error || !data) {
        throw createError({ statusCode: 404, statusMessage: "Event not found" })
    }

    return {
        name: data.name,
        totalSeats: data.total_seats,
        soldSeats: data.sold_seats,
        seatsLeft: data.total_seats - data.sold_seats,
        status: data.status,
        date: data.date,
    }
})
