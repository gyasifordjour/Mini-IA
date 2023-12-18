const express = require('express');
const app = express();
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');
app.use(express.json());


app.post('/patient')

mongoose.connect('mongodb://localhost:27017/emrs', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/patients', patientRoutes);


app.listen(3000, () => {
    console.log(`Server is running `);
  });