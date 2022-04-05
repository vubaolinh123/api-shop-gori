import cateProduct from "../models/catePro"
import Products from "../models/product"

export const create = async (req, res) => {
    try {
        const catePro = await new cateProduct(req.body).save()
        res.json(catePro)
    } catch (error) {
        res.status(400).json({ message: "Không thêm được Category" })
    }
}


export const remove = async (req, res) => {
    try {
        const category = await cateProduct.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json(
            { error: "Không tìm được danh mục để xóa" }
        )
    }
}

export const list = async (req, res) => {
    try {
        const catePro = await cateProduct.find({}).exec()
        res.json(catePro)
    } catch (error) {
        res.status(400).json({ message: "Không lấy được Category" })
    }
}

export const read = async (req, res) => {
    try {
        const catePro = await cateProduct.findOne({ _id: req.params.id }).exec()
        const product = await Products.find({ CategoryProduct: catePro._id }).select('-CategoryProduct').exec()
        res.json({
            catePro,
            product
        })
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được Category cùng loại" }
        )
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body
    console.log(update, condition);
    try {
        const category = await cateProduct.findOneAndUpdate(condition, update).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json(
            { error: "Không update được danh mục" }
        )
    }
}