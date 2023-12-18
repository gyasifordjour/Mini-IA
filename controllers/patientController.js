const Patient = require('../models/patient');

const patientController = {
  registerPatient: async (req, res) => {
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

      const newPatient = new Patient({
        patientID,
        surname,
        othernames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      });

 
      await newPatient.save();

      res.status(201).json({ message: 'Patient registered successfully', data: newPatient });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  startEncounter: async (req, res) => {
    try {
     
      const patient = await Patient.findByIdAndUpdate(
        req.body.patientID,
        { $set: { encounter: { date: new Date(), type: req.body.encounterType } } },
        { new: true }
      );
      res.status(200).json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  submitVitals: async (req, res) => {
    try {
      
      const patient = await Patient.findByIdAndUpdate(
        req.body.patientID,
        {
          $set: {
            vitals: {
              bloodPressure: req.body.bloodPressure,
              temperature: req.body.temperature,
              pulse: req.body.pulse,
              spo2: req.body.spo2,
            },
          },
        },
        { new: true }
      );
      res.status(200).json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getPatientList: async (req, res) => {
    try {
      
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getPatientDetails: async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.patientID);
      if (!patient) {
        res.status(404).json({ message: 'Patient not found' });
      } else {
        res.status(200).json(patient);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = patientController;
