import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types
const voucherSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    priceSale: {
        type: Number,
        required: true
    },
    used: {
        type: Number,
        required: true
    },
}, { timestamps: true });



const Voucher = mongoose.model('Voucher', voucherSchema);


export default Voucher;