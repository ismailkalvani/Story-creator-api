const express = require('express');
const { createStory, getStories } = require('../controllers/storyController');
const { verifyToken } = require('../middleware/authMiddleware');
const { getStoryById } = require('../controllers/storyController');

const router = express.Router();

router.post('/', verifyToken, createStory);
router.get('/', verifyToken, getStories);

router.get('/:storyId', verifyToken, getStoryById);

module.exports = router;
