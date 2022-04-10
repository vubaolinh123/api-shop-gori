import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    parentId: {

    },
    Product: {
        type: ObjectId,
        ref: "Product"
    },
    User: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });



const comment = mongoose.model('comment', commentSchema);

export default comment;