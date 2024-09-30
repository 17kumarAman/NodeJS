const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointment');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());  // For parsing application/json

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
}));

app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
