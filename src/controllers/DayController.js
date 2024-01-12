const DayModel = require("../models/DayModel");


exports.addMealInDay = async (req, res) => {
  try {
    const data = req.body;
    const day = new DayModel(data);
    console.log('====================================');
    console.log(day);
    console.log('====================================');
    const result = await day.addMealInDay();

    return res.send(result);
  } catch (err) {
    console.log(req.body);
    console.log(err);
    return res.sendStatus(500);
  }
};

exports.getDay = async (req, res) => {
  try {
    date = req.body.date;
    const day = await DayModel.getDay(date);
    return res.send(day);
  } catch (err) {
    console.log(req.body);
    console.log(err);
    return res.sendStatus(500);
  }  
}

exports.deleteDay = async (req, res) => {
  try {
    date = req.body.date;
    const result = await DayModel.deleteDay(date);
    return res.send(result);
  } catch (err) {
    console.log(req.params);
    console.log(err);
    return res.sendStatus(500);
  }  
}


