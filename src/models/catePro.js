import mongoose, { Schema } from "mongoose";

const catePro = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("CategoryProduct", catePro)