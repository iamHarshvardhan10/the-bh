import mongoose from "mongoose";
import { mailSender } from "../utils/MailSender.js";
import { otpTemplate } from "../mail/templates/emailVerificationTemplate.js";

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }
})


const sendVerificationEmail = async (email, otp) => {
    try {
        const mailResponse = await mailSender(email, 'Verification Email', otpTemplate(otp))
        console.log(mailResponse)
    } catch (error) {
        console.log(error)
        throw error
    }
}


OTPSchema.pre('save', async function (next) {
    console.log("New Document Saved To Database")

    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp)
        next()
    }
})

const OTP = mongoose.model('OTP', OTPSchema);
export default OTP;