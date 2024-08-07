const express = require('express');
const { register, login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');
const { getCurrentUser } = require('../controllers/authController');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', verifyToken, getCurrentUser);

module.exports = router;
