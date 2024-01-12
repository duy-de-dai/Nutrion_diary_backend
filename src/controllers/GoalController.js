const GoalModel = require('../models/GoalModel');

exports.createGoal = async (req, res) => {
  try {
    const goalData = req.body;
    const goalModel = new GoalModel(goalData);
    const insertedGoal = await goalModel.addGoal();
    return res.status(201).json(insertedGoal);
  } catch (error) {
    console.error('Error creating goal:', error);
    return res.sendStatus(500);
  }
};

exports.getGoalById = async (req, res) => {
  try {
    const goalId = req.params.goalId;
    const goal = await GoalModel.getGoalById(goalId);

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    return res.status(200).json(goal);
  } catch (error) {
    console.error('Error getting goal by ID:', error);
    return res.sendStatus(500);
  }
};

exports.updateGoal = async (req, res) => {
  try {
    const goalId = req.params.goalId;
    const goalData = req.body;
    const goalModel = new GoalModel({ id: goalId, ...goalData });
    const updatedGoal = await goalModel.updateGoal();
    return res.status(200).json(updatedGoal);
  } catch (error) {
    console.error('Error updating goal:', error);
    return res.sendStatus(500);
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.goalId;
    const result = await GoalModel.deleteGoal(goalId);

    if (!result || result.message) {
      return res.status(404).json({ message: result.message || 'Goal not found' });
    }

    return res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
    console.error('Error deleting goal:', error);
    return res.sendStatus(500);
  }
};
