const UserModel = require("../models/UserModel");

exports.saveUser = async (req, res) => {
    try {
        const data = req.body;
        const user = new UserModel(data);

        const result = await user.save();

        return res.send(result);
    } catch (err) {
        console.log(req.body);
        console.log(err);
        return res.sendStatus(500);
    }
};