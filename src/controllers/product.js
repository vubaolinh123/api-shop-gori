import Products from "../models/product"


export const create = async (req, res) => {
    try {
        const product = await new Products(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không thêm được sản phẩm" }
        )
    }
}
export const list = async (req, res) => {
    try {
        const product = await Products.find({}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}
export const getOne = async (req, res) => {
    try {
        const product = await Products.findOne({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body
    console.log(update, condition);
    try {
        const product = await Products.findOneAndUpdate(condition, update).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không update được sản phẩm" }
        )
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Products.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}