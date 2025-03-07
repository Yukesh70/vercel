import express from 'express';
import payment from './routes/productRoutes.js';
import cors from 'cors';



const app = express();

app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use(express.json());// nama post man la body la nama raw data kudukanum na intha middleware kandipa use pananum...


app.use("/api/v1",payment)

export default app;