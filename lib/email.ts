import {logger} from "~/lib/logging";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";


export const sendMail = async (opts: Mail.Options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });

    logger.info(`Sending mail to - ${opts.to}`);
    try {
        const info = await transporter.sendMail(opts);
        logger.info('Email sent: ' + info.response);
    } catch (e) {
        console.error(e)
        logger.error(e);
        throw e;
    }
    // (error, info)=> {
    //     if (error) {
    //         logger.error(error);
    //         console.error(error)
    //         reject(error)
    //     } else {
    //         logger.info('Email sent: ' + info.response);
    //         resolve();
    //     }
    // }
}
