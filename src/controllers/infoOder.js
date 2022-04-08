import InfoOder from "../models/infoOder"
import detailBill from "../models/detailBill"

export const create = async (req, res) => {
    try {
        const info = await new InfoOder(req.body).save()
        res.json(info)
    } catch (error) {
        res.status(400).json({ message: "Không thêm được thông tin đặt hàng" })
    }
}

export const list = async (req, res) => {
    try {
        const info = await InfoOder.find({}).exec()
        res.json(info)
    } catch (error) {
        res.status(400).json({ message: "Không lấy được danh sách đặt hàng" })
    }
}


export const read = async (req, res) => {
    try {
        const info = await InfoOder.findOne({ _id: req.params.id }).exec()
        const detail = await detailBill.find({ infoOder: info._id }).select('-infoOder').exec()
        res.json({
            info,
            detail
        })
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được Bill cùng loại" }
        )
    }
}