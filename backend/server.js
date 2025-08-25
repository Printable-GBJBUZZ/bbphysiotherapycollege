const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'BBPC Backend API is running!' });
});

// Test database connection route
app.get('/api/test-db', (req, res) => {
  const mongoose = require('mongoose');
  const status = mongoose.connection.readyState;
  const statusMessage = 
    status === 0 ? 'Disconnected' :
    status === 1 ? 'Connected' :
    status === 2 ? 'Connecting' :
    status === 3 ? 'Disconnecting' : 'Unknown';
  
  res.json({ 
    database: 'MongoDB', 
    status: statusMessage,
    connection: mongoose.connection.host ? `Connected to ${mongoose.connection.host}` : 'Not connected'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});