import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"
import productRouter from "./routes/product"
import userRouter from "./routes/auth"
import { readdirSync } from 'fs';
import path, { dirname } from 'path';

const app = express();
// middleware
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());

// Router
app.use("/api", productRouter);
app.use("/api", userRouter);
// connect db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => {
        console.log("Kết nối DB thành công");
    })
    .catch(err => console.log(err))

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})