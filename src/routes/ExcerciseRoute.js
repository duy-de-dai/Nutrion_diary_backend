const express = require('express');
const router = express.Router();
const excerciseController = require('../controllers/ExcerciseController');

// Tạo bài tập mới
router.post('/add', excerciseController.createExcercise);

// Lấy thông tin bài tập theo ID
router.get('/:excerciseId', excerciseController.getExcerciseById);

// Cập nhật thông tin bài tập theo ID
router.put('/:excerciseId', excerciseController.updateExcercise);

// Xóa bài tập theo ID
router.delete('/:excerciseId', excerciseController.deleteExcercise);

module.exports = router;
