const ExcerciseModel = require('../models/ExcerciseModel');

exports.createExcercise = async (req, res) => {
  try {
    const excerciseData = req.body;
    const excerciseModel = new ExcerciseModel(excerciseData);
    const insertedExcercise = await excerciseModel.addExcercise();
    return res.status(201).json(insertedExcercise);
  } catch (error) {
    console.error('Error creating excercise:', error);
    return res.sendStatus(500);
  }
};

exports.getExcerciseById = async (req, res) => {
  try {
    const excerciseId = req.params.excerciseId;
    const excercise = await ExcerciseModel.getExcerciseById(excerciseId);

    if (!excercise) {
      return res.status(404).json({ message: 'Excercise not found' });
    }

    return res.status(200).json(excercise);
  } catch (error) {
    console.error('Error getting excercise by ID:', error);
    return res.sendStatus(500);
  }
};

exports.updateExcercise = async (req, res) => {
  try {
    const excerciseId = req.params.excerciseId;
    const excerciseData = req.body;
    const excerciseModel = new ExcerciseModel({ id: excerciseId, ...excerciseData });
    const updatedExcercise = await excerciseModel.updateExcercise();
    return res.status(200).json(updatedExcercise);
  } catch (error) {
    console.error('Error updating excercise:', error);
    return res.sendStatus(500);
  }
};

exports.deleteExcercise = async (req, res) => {
  try {
    const excerciseId = req.params.excerciseId;
    const result = await ExcerciseModel.deleteExcercise(excerciseId);

    if (!result || result.message) {
      return res.status(404).json({ message: result.message || 'Excercise not found' });
    }

    return res.status(200).json({ message: 'Excercise deleted successfully' });
  } catch (error) {
    console.error('Error deleting excercise:', error);
    return res.sendStatus(500);
  }
};
