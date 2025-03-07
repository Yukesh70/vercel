import app from './app.js'; // nama oru file iruka value namaku venum nala atha ithula import panum pothu extension ah marakama mention panrom.....

import dotenv from 'dotenv';

import razorpay from 'razorpay';

dotenv.config({path:"backend/config/config.env"});

const port = process.env.PORT || 5000;

export const instance = new razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET
})


app.listen(port,()=>{

    console.log(`Server is Running on this port ${port}`);

})
