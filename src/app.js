import express from "express"
import cors from 'cors';
import morgan from "morgan"
import productRouter from "./routes/product"
const app = express();
// middleware
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());

app.use("/api", productRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})