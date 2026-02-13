import {defineEventHandler} from "h3";
import {z} from "zod";
import {RecaptchaEnterpriseServiceClient} from '@google-cloud/recaptcha-enterprise';

import {sendMail} from "~/lib/email";

// interface ContactRequest {
//     name: string,
//     email: string,
//     message: string
// }

const rentalSchema = z.object({
    name: z.string({message: "Meno je povinny parameter"}),
    email: z.string()
        .email({message: "The email address entered appears to be invalid"}),
    phone: z.string(),
    eventName: z.string(),
    eventType: z.string(),
    eventDate: z.string(),
    eventDurationHours: z.string(),
    eventDetails: z.string(),
    eventPeopleCount: z.string(),
    eventEquipment: z.string(),
});


const client = new RecaptchaEnterpriseServiceClient({apiKey: process.env.RECAPTCHA_API_KEY});
const projectPath = client.projectPath(process.env.GOOGLE_PROJECT_ID);




export default defineEventHandler(async (event) => {


    const result = await readValidatedBody(event, body => rentalSchema.safeParse(body));

    if (!result.success) {
        console.log(result.error)
        return {
            success: false,
            error: result.error.issues.map(x => x.message).join(". ") + '.'
        }
    }



    const emailBody = `
        <b>Meno:</b> ${result.data.name}<br/>
        <br/><b>Email:</b> ${result.data.email}<br/>
        <br/><b>Telefón:</b> ${result.data.phone}<br/>
        <br/><b>Názov podujatia:</b> ${result.data.eventName}<br/>
        <br/><b>Typ podujatia:</b> ${result.data.eventType == 'private' ? 'súkromné' : 'verejné'}<br/>
        <br/><b>Termín podujatia</b> ${result.data.eventDate}<br/>
        <br/><b>Počet hodín prenájmu:</b> ${result.data.eventDurationHours}<br/>
        <br/><b>Viac o podujatí (zameranie podujatia):</b> ${result.data.eventDetails}<br/>
        <br/><b>Predpokladaný počet ľudí:</b> ${result.data.eventPeopleCount}<br/>
        <br/><b>Technické zabezpečenie:</b> ${result.data.eventEquipment}<br/>`;

    try {
        await sendMail({
            from: 'noreply@sorrywecan.com',
            to: process.env.CONTACT_MAIL,
            replyTo: result.data.email,
            subject:`BLUEROOM RENTAL - ${result.data.name}`,
            html: emailBody,
        })
        console.log('Email was sent')

    } catch (e){
        console.error('ERROR: BLUEROOM Rental email was not sent!', e)

    }


    return {
        success: true,
        data: result.error,
    };

})



//
//
// // Example usage:
// async function sendEmail() {
// // Setup OAuth2Client and authenticate (assumed to be done prior to this call)
//     const auth = /* your authenticated OAuth2 client */;
//     const gmail = google.gmail({version: "v1", auth});
//
//     const to = "recipient@example.com";
//     const from = "youraddress@gmail.com"; // must be one of the allowed sender addresses
//     const replyTo = "differentreply@example.com"; // the custom Reply-To you want
//     const subject = "Test Email with Custom Reply-To";
//     const messageText = "This email was sent using the Gmail API with a custom Reply-To header.";
//
//     const raw = makeBody(to, from, subject, messageText, replyTo);
//
//     try {
//         const res = await gmail.users.messages.send({
//             userId: "me", // or your email address if preferred
//             requestBody: {
//                 raw: raw,
//             },
//         });
//
//         console.log("Message sent:", res.data);
//     } catch (err) {
//         console.error("Error sending message:", err);
//     }
// }
//
// sendEmail();