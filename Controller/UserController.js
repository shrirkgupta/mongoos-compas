const userSchema = require('../Models/UserModel')

let register = async (req, res) => {
let name= req.body.name
let email= req.body.email
let password=req.body.password

    try {
        let data = await userSchema.create({ name, email, password })

        res.json({ msg: 'Registered Successfully!', success: true, data })
    } catch (error) {
        res.json({ msg: 'Error !', success: false, error: error.message })
    }
}

module.exports = {
    register,
}