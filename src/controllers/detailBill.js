import DetailBill from "../models/detailBill"


export const create = async (req, res) => {
    try {
        const detail = await new DetailBill(req.body).save();
        res.json(detail)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không thêm được chi tiết đơn hàng" }
        )
    }
}
export const list = async (req, res) => {
    try {
        const detail = await DetailBill.find().populate('infoOder').sort({ "createdAt": -1 })
        res.json(detail)
    } catch (error) {
        res.status(400).json(
            { error: "Không tìm được chi tiết đơn hàng" }
        )
    }
}
