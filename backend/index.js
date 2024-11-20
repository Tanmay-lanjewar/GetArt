// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./model/comment'); // Your Comment model
const ArtUpload = require('./model/art_model'); // Your ArtUpload model
const User = require('./model/user'); // Your User model

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Use CORS for cross-origin requests
app.use(cors());

// Body-Parser middleware to handle incoming JSON requests
app.use(bodyParser.json()); // For JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // For form data

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/GetArt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Database connection error:', err));

// Route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the GetArt API!');
});


// Listen for incoming requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
