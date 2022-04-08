import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import productRouter from "./routes/product"
import cateProRouter from "./routes/catePro"
import userRouter from "./routes/auth"
import orderRouter from "./routes/infoOder"
import detailBillRouter from "./routes/detailBill"

const app = express();
const swaggerJSDocs = YAML.load('./api.yaml');

// middleware
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDocs));

// Router
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", cateProRouter);
app.use("/api", orderRouter);
app.use("/api", detailBillRouter);
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