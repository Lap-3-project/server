const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes')
const userController = require('./controllers/user');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', routes)
app.get('/', (req, res) => {res.json({message: 'Welcome to Universally challenged server'})})



// Export server

module.exports = app;