import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    fullname: {
        type: String,
        minLength: 5,
        required: true
    },
    email: {
        type: String,
        minLength: 5,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });

export default mongoose.model("User", userSchema);