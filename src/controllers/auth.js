import User from "../models/user"

export const register = async (req, res) => {
    try {
        // console.log("Hello");
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {
        res.status(400).json(
            { error: "Không đăng ký được tài khoản" }
        )
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json(
            { error: "Sai tai khoan hoac mat khau" }
        )
    }
}

export const list = async (req, res, next) => {
    try {
        const users = await User.find({}).exec()
        res.json(users)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được user" }
        )
    }
}