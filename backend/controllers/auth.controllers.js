import User from "../models/User.model.js";
import otpgenerator from 'otp-generator'
import OTP from "../models/OTP.model.js";


// SENDING OTP
export const sendOtp = async (req, res) => {
    try {
        // GET EMAIL FROM REQUEST BODY (DESTRUCTURE EMAIL)
        const { email } = req.body;

        // CHECK IF EMAIL IS PRESENT IN DATABASE OR NOT
        const checkEmailPresent = await User.findOne({ email });

        // VALIDATE 
        if (checkEmailPresent) {
            return res.status(404).json({
                success: false,
                message: 'User Already Registerd'
            })
        }

        // IF USER IS NOT ALREADY REGISTERED WE WILLL GENERATE EMAIL
        var otp = otpgenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        })

        let result = await OTP.findOne({ otp: otp })
        console.log('Result is generate OTP Func', result)
        console.log(otp)
        while (result) {
            otp = otpgenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false
            })
        }

        const otpPayload = { email, otp }
        const otpBody = await OTP.create(otpPayload)

        console.log('OTP BODY', otpBody)

        return res.status(200).json({
            success: true,
            message: 'OTP sent Successfully',
            otp
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            response: 'Internal Server Errro'

        })
    }
}


// 