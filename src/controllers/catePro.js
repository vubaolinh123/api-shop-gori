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