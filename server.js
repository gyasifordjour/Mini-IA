const express = require('express');
const app = express();
const connectToDatabase = require('./services/database');
const mongoose = require('mongoose');
const Patient = require('./models/patient');
const patientRoutes = require('./routes/patientRoutes');
app.use(express.json());
connectToDatabase();





mongoose.
connect('mongodb+srv://sgfordjour:l1Eu0mBQKIAH8tRr@kay.ocovk1l.mongodb.net/node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongoDB')

    app.listen(3000, () => {
        console.log('Node api is running on port 3000')
    })

}).catch((error) =>{
    console.log(error)

})

app.use('/api/patients', patientRoutes);


app.listen(3000, () => {
    console.log(`Server is running `);
  });