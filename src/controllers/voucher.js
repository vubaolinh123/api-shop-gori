import Voucher from "../models/voucher"

export const create = async (req, res) => {
    try {
        const voucher = await new Voucher(req.body).save();
        res.json(voucher)
    } catch (error) {
        res.status(400).json(
            { error: "Tên Voucher không trùng nhau" }
        )
    }
}


export const read = async (req, res) => {
    try {
        const nameVoucher = req.query.name || "";
        const voucher = await Voucher.findOne({ name: nameVoucher }).exec()
        if (voucher == null) {
            return res.status(400).json(
                { error: "Không có Voucher nào như vậy" }
            )
        }
        if (voucher.used == 0) {
            return res.status(400).json(
                { error: "Voucher đã hết lượt sử dụng" }
            )
        }
        res.json({ voucher })
    } catch (error) {
        res.status(400).json(
            { error: "Không tìm được  Voucher" }
        )
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body
    try {
        const voucher = await Voucher.findOneAndUpdate(condition, update).exec()
        res.json(voucher)
    } catch (error) {
        res.status(400).json(
            { error: "Không update được voucher" }
        )
    }
}

export const list = async (req, res) => {
    try {
        const voucher = await Voucher.find()
        res.json(voucher)
    } catch (error) {
        res.status(400).json(
            { error: "Không lấy được danh sách Voucher" }
        )
    }
}

export const remove = async (req, res) => {
    try {
        const voucher = await Voucher.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(voucher)
    } catch (error) {
        res.status(400).json(
            { error: "Không tìm được Voucher để xóa" }
        )
    }
}