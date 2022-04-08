import User from "../models/user"
import infoOder from "../models/infoOder"

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if (!user) {
            res.status(400).json({ message: "Không tìm thấy User" })
        }
        req.profile = user;
        req.profile.password = undefined
        next()
    } catch (error) {
        res.status(400).json(
            { error: "Có lỗi nào đấy đang xẩy ra userById" }
        )
    }
}

export const read = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).exec()
        const info = await infoOder.find({ User: user._id }).select('-User').exec()
        res.json({
            user,
            info
        })
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được Bill cùng loại" }
        )
    }
}