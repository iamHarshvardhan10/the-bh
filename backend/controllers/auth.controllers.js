import User from "../models/User.model.js";
import otpgenerator from 'otp-generator'
import OTP from "../models/OTP.model.js";
import bcrypt from 'bcryptjs'

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


// REGISTER 

export const register = async (req, res) => {
    try {
        // DESTRCUTRE FROM REQ BODY
        const { userName, email, password, role, otp } = req.body;

        // VALIDATION 
        if (!userName || !email || !password) {
            return res.status(404).json({
                success: false,
                message: "All Fields Are Required"
            })
        }

        // CHECK IF USER ALREADY EXIST
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User Already Register!Please Login to Continue"
            })
        }

        // FIND THE MOST RECENT OTP FOR THE EMAIL
        const response = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1);

        console.log('Response for the OTP', response)

        if (response.length === 0) {
            return res.status(400).json({
                success: false,
                message: "The OTP IS NOT VALID"
            })
        } else if (otp !== response.otp) {
            return res.status(400).json({
                success: false,
                message: "The OTP sent is invalid"
            })
        }

        const hashedPasswords = await bcrypt.hash(password, 10);


        const user = await User.create({
            userName,
            email,
            password: hashedPasswords,
            role,
            avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${userName}`
        })

        return res.status(200).json({
            message: "User Registered Successfully",
            user,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message1: "this is message",
            message: error.message
        })
    }
}