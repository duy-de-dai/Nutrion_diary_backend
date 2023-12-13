const UserModel = require("../models/UserModel");


exports.saveUser = async (user) => {
  return await user.save();
};