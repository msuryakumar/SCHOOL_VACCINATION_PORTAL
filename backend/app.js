const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/students');
const driveRoutes = require('./routes/drives');
const reportRoutes = require('./routes/reports');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);
app.use('/api/vaccination', driveRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/dashboard', dashboardRoutes);

module.exports = app;
