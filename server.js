const express = require('express');
const app = express();
const connectToDatabase = require('./services/database');
const mongoose = require('mongoose');
const Patient = require('./models/patient');
const patientRoutes = require('./routes/patientRoutes');
app.use(express.json());
connectToDatabase();



app.post('/patient')

mongoose.connect('mongodb://localhost:27017/emrs', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/patients', patientRoutes);


app.listen(3000, () => {
    console.log(`Server is running `);
  });