import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"

import productRouter from "./routes/product"
import cateProRouter from "./routes/catePro"
import authRouter from "./routes/auth"
import orderRouter from "./routes/infoOder"
import detailBillRouter from "./routes/detailBill"
import userRouter from "./routes/user"
import commentRouter from "./routes/comment"
import voucherRouter from "./routes/voucher"

const app = express();


// app.use(cors({
//    origin: 'https://shop.linkcualinh.com',
//    methods: ['POST', 'PUT', 'DELETE','GET']
// }));

app.use(cors());


// middleware
app.use(morgan("tiny"))
app.use(express.json());

// Router
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", cateProRouter);
app.use("/api", orderRouter);
app.use("/api", detailBillRouter);
app.use("/api", userRouter);
app.use("/api", commentRouter);
app.use("/api", voucherRouter);

// connect db
const mongoAtlasUri = "mongodb+srv://vubaolinh456:vubaolinh456@databasebloglv.sbvymx6.mongodb.net/shop?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose đã được kết nối")
    );
} catch (e) {
    console.log("Không thể kết nối");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Kết nối thất bại ${err}`));
dbConnection.once("open", () => console.log("Kết nối thành công đến DB!"));

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})
