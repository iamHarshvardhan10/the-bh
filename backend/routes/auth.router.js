import express from 'express';
import { register,  sendOtp } from '../controllers/auth.controllers.js';

const router = express.Router();


// OTP SENDING 
router.post('/send-otp', sendOtp)
// REGISTER USER
router.post('/register', register);

// LOGIN USER
// router.post('/login', login);



export default router;