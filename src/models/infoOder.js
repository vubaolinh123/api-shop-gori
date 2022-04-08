import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types
const infoOderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    User: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });



const infoOder = mongoose.model('infoOder', infoOderSchema);

export default infoOder;