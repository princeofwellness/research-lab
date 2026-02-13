import {defineEventHandler} from "h3";
import {z} from "zod";
import {RecaptchaEnterpriseServiceClient} from '@google-cloud/recaptcha-enterprise';
import {BrevoService} from "~/server/service/brevoService";
import {contactDiscovery, contactDiscoveryIds, contactPurposeIds, contactPurposes} from "~/lib/common/contactForm";
import {sendMail} from "~/lib/email";

// interface ContactRequest {
//     name: string,
//     email: string,
//     message: string
// }

const contactSchema = z.object({
    name: z.string()
        .min(3, {message: "An appropriate name must be provided and it must include at least three characters"})
        .max(40, {message: "The provided name exceeds the permissible length of 40 characters"}),
    email: z.string()
        .email({message: "The email address entered appears to be invalid"}),
    organization: z.string().optional(),
    message: z.string()
        .min(3, {message: 'The message provided lacks sufficient detail'}),
    // purpose: z.enum(contactPurposeIds, {message: "Purpose of Contact is invalid"}),
    // discovery: z.enum(contactDiscoveryIds, {message: "How did you discover Research Lab is invalid"}).optional(),
    subscribe: z.boolean(),
    // researchParticipant: z.boolean(),
    captchaToken: z.string().min(1)
});

// const client = new RecaptchaEnterpriseServiceClient({apiKey: process.env.RECAPTCHA_API_KEY});
// const projectPath = client.projectPath(process.env.GOOGLE_PROJECT_ID);

export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, body => contactSchema.safeParse(body));

    // Handle validation error.
    if (!result.success) {
        return {success: false, error: result.error.issues.map(x => x.message).join(". ") + '.'}
    }

    // const [response] = await client.createAssessment({
    //     assessment: {
    //         event: {
    //             token: result.data.captchaToken,
    //             siteKey: process.env.RECAPTCHA_SITE_KEY,
    //         },
    //     },
    //     parent: projectPath,
    // });

    // if (!response.tokenProperties.valid) {
    //     return {
    //         success: false,
    //         error: "Verification unsuccessful. Please complete the reCAPTCHA again to proceed.",
    //         reason: response.tokenProperties.invalidReason
    //     };
    // }

    // if (response.riskAnalysis.score < 0.5) {
    //     return {
    //         success: false,
    //         error: "Verification unsuccessful. Please complete the reCAPTCHA again to proceed.",
    //         riskScore: response.riskAnalysis.score
    //     };
    // }


    // try {
    //     await BrevoService.sendTransactionalEmail({
    //         sender: {email: "no-reply@sorrywecan.com", name: "SORRYWECAN"},
    //         replyTo: {email: result.data.email, name: result.data.name},
    //         to: process.env.CONTACT_MAIL,
    //         textContent: result.data.message,
    //         subject: `Message from ${result.data.name}`,
    //     })
    // } catch (e){
    //     console.log(e)
    //     return {success: false, error: 'Error sending email!', e}
    // }

    const purposeItem = contactPurposes.filter(x => x.id == result.data.purpose)[0]
    const purpose = purposeItem?.label ?? '';
    const discoveryItem = contactDiscovery.filter(x => x.id == result.data.discovery)[0];
    const discovery = discoveryItem?.label ?? '';
    const orgLine = result.data.organization ? `<b>Organization:</b> ${result.data.organization}<br/>` : '';

    const emailBody = `
        <b>Name:</b> ${result.data.name}<br/>
        ${orgLine}
        <b>Email:</b> ${result.data.email}<br/>        
        <b>Message:</b> <br/>${result.data.message}`;

    try {
        const emailAddresses = [];
        const envEmails = process.env.CONTACT_MAIL ?? 'researchlab@sorrywecan.com';
        if(envEmails.indexOf(',') !== -1){
            emailAddresses.push(...envEmails.split(','));
        } else {
            emailAddresses.push(envEmails)
        }

        for (let emailAddress of emailAddresses) {
            await sendMail({
                from: 'noreply@sorrywecan.com',
                to: emailAddress,
                replyTo: result.data.email,
                subject:`Contact initiation from ${result.data.name}`,
                html: emailBody,
            })
        }
    } catch {
        return {success: false, error: "We couldn’t send your contact request. Please try again later or email us directly at researchlab@sorrywecan.com"}
    }


    /*
    const mail = new MailComposer({
        from: "me",
        to: process.env.CONTACT_MAIL,
        replyTo: result.data.email,
        html: emailBody,
        subject: `Contact initiation from ${result.data.name}`,
        textEncoding: 'base64'
    });

    mail.compile().build(async (err, message) => {
        if (err) console.log(err);
        const encodedEmail = Buffer
            .from(message)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        const gmailClient = gmail({version: "v1", auth: googleAuthClient});
        await gmailClient.users.messages.send({
            userId: "me",
            requestBody: {raw: encodedEmail}
        });
    });*/

    if(result.data.subscribe){
        try {
            await BrevoService.subscribe(process.env.BREVO_SUBSCRIPTION_LIST_ID, result.data.email);
        } catch {}
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