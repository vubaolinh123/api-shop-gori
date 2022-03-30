import User from "../models/user"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const exitsUser = await User.findOne({ email }).exec();

        if (exitsUser) {
            return res.status(400).json({ message: "Tài khoản đã tồn tại" })
        }

        const user = await new User({ email, name, password }).save();

        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).json(
            { error: "Không đăng ký được tài khoản" }
        )
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).exec()
        if (!user) {
            res.status(404).json({ message: "Email không tồn tại" })
        }
        if (!user.authenticate(password)) {
            res.status(404).json({ message: "Mật khẩu không đúng" })
        }

        const token = jwt.sign({ _id: user.id }, "abc")

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Đăng nhập thất bại" }
        )
    }
}
