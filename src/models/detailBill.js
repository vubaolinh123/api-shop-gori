import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types

const detailBillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    infoOder: {
        type: ObjectId,
        ref: "infoOder"
    }
}, { timestamps: true });



const detailBill = mongoose.model('detailBill', detailBillSchema);

export default detailBill;