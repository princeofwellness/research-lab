import {defineEventHandler, readBody} from "h3";
import {BrevoService} from "~/server/service/brevoService";
import {senderApiService} from "~/server/service/senderApiService";

export interface SubscribeRequest {
    email: string
}


export default defineEventHandler(async (event) => {
    try {
        const {email} = await readBody<SubscribeRequest>(event)

        const contactId = await BrevoService.subscribe(process.env.BREVO_SUBSCRIPTION_LIST_ID, email);

        return {
            success: true,
            email,
        }
    } catch (e) {
        return {
            success: false, message: e.toString()
        }
    }

});