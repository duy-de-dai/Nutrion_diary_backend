const DayModel = require("../models/DayModel");


exports.addDay = async (req, res) => {
  try {
    const data = req.body;
    const day = new DayModel(data);
    console.log('====================================');
    console.log(day);
    console.log('====================================');
    const result = await day.addDay();

    return res.send(result);
  } catch (err) {
    console.log(req.body);
    console.log(err);
    return res.sendStatus(500);
  }
};


