const Story = require('../models/Story');

exports.createStory = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newStory = new Story({ title, content, user: req.userId });
        await newStory.save();
        res.status(201).json({ message: 'Story created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getStories = async (req, res) => {
    try {
        const stories = await Story.find({ user: req.userId });
        res.status(200).json(stories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


exports.getStoryById = async (req, res) => {
    const { storyId } = req.params;
    try {
        const story = await Story.findById(storyId);
        if (!story) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.status(200).json(story);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

