/* eslint-disable no-undef */
import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();


export const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port:587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
        })

        let info = await transporter.sendMail({
            from: "The BlogHUb",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })
        console.log('email sent pls check')
        console.log(info.response);
        return info


    } catch (error) {
        console.log(error.message)
        return error.message
    }
}
