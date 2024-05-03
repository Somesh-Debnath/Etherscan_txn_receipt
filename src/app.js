"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var transactionRouter_1 = require("./routes/transactionRouter");
var express = require('express');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 3000;
// Connect to MongoDB Atlas
(0, db_1.default)();
// Middleware to parse JSON requests
app.use(express.json());
// Routes
app.use('/transaction', transactionRouter_1.default);
// Start Express server
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
