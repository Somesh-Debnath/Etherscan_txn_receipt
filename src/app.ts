import connectDB from './db';
import transactionRouter from './routes/transactionRouter';

const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/transaction', transactionRouter);

// Start Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
