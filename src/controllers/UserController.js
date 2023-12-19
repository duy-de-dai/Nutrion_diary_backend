const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

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

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const result = await UserModel.login(email, password);
  const userId = result.user.id;
  if (result.success) {
    refreshToken = jwt.sign({ Id: userId }, 'secretKey', { expiresIn: '7d' }); // Thời gian sống token

    UserModel.updateToken(userId, refreshToken);
    res.json({ user: result.user, refreshToken });
  } else {
    res.json({ error: result.error });
  }
};

