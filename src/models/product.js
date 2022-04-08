import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    size: {
        type: String,
    },
    desc: {
        type: String,
    },
    status: {
        type: Number,
        required: true
    },
    CategoryProduct: {
        type: ObjectId,
        ref: "CategoryProduct"
    }
}, { timestamps: true });

productSchema.index({ name: 'text' });



const Products = mongoose.model('Product', productSchema);

Products.createIndexes({ name: 'text' })

export default Products;