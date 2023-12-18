const Patient = require('../models/patient');


const registerPatient = async (req, res) => {
    try {
      const {
        patientID,
        surname,
        othernames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      } = req.body;
  
      // Create a new patient instance
      const newPatient = new Patient({
        patientID,
        surname,
        othernames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      });