import {defineEventHandler} from "h3";
import {z} from "zod";
import {sendMail} from "~/lib/email";
import {logger} from "~/lib/logging";


const schema = z.object({
    email: z.string().email(),
});

export default defineEventHandler(async (event) => {
    const request = await readValidatedBody(event, schema.safeParse);
    if (typeof request.error != 'undefined') {
        return {success: false, statusCode: 400, errors: request.error.errors}
    }

    try {
        await sendMail({
            from: 'noreply@sorrywecan.com',
            to: request.data?.email ?? '',
            subject: "This is a test",
            html: "<h1>Testing is awesome</h1>",
            replyTo: 'researchlab@sorrywecan.com'
        })

        return {success: true}
    } catch (err) {
        logger.error(err.toString())
        return {success: false, error: err.toString()}

    }
});