import Products from "../models/product"


export const create = async (req, res) => {
    try {
        const product = await new Products(req.body).save();
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không thêm được sản phẩm" }
        )
    }
}
export const list = async (req, res) => {
    try {
        const product = await Products.find().populate('CategoryProduct').sort({ "createdAt": -1 })
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}

export const search = async (req, res) => {
    try {
        const searchField = req.query.name;
        const product = await Products.find({ name: { $regex: searchField, $options: '$i' } })
        if (searchField == "") {
            res.json("")
        } else {
            res.json(product)
        }
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
            { error: "Không tìm được sản phẩm để xóa" }
        )
    }
}

export const page = async (req, res) => {
    try {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 12;
        const skip = limit * (page - 1)
        const sort = req.query.sort || { "createdAt": -1 };
        const product = await Products.find().limit(limit).skip(skip).sort(sort)
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tìm được sản phẩm" }
        )
    }
}