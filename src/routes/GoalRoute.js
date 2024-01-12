const express = require('express');
const router = express.Router();
const goalController = require('../controllers/GoalController');

// Tạo mục tiêu mới
router.post('/add', goalController.createGoal);

// Lấy thông tin mục tiêu theo ID
router.get('/:goalId', goalController.getGoalById);

// Cập nhật thông tin mục tiêu theo ID
router.put('/:goalId', goalController.updateGoal);

// Xóa mục tiêu theo ID
router.delete('/:goalId', goalController.deleteGoal);

module.exports = router;
