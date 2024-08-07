const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const storyRoutes = require("./routes/storyRoutes");

//middleware routes
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes); 
app.use('/api/stories', storyRoutes);

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
