const User = require('../models/User')

const addUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phonenumber;

        const data = await User.create({ name: name, email: email, phoneNumber: phoneNumber })
        res.status(201).json({ newUserDetail: data })
    }
    catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

const getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ allUsers: users })
    } catch (error) {
        console.log('Get user is failing'.JSON.stringify(error))
        res.status(500).json({ error: error })
    }
}

const deleteUser = async (req, res, next) => {

    try {
        if(req.params.id == 'undefined'){
            console.log('Id is missing')
            return res.status(400).json({err : 'ID is missing'})
        }
        const uId = req.params.id;
        await User.destroy({ where: { id: uId } })
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

}

module.exports = {
    addUser,
    getUser,
    deleteUser
}