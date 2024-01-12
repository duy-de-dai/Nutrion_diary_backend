const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')



router.post('/', UserController.saveUser);
router.post('/login', UserController.login);
router.put('/update/:id', UserController.update)


module.exports = router;