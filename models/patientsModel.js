const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: {
    type: String,
    required: true,
    unique: true,
  },
  surname: {
    type: String,
    required: true,
  },
  othernames: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  residentialAddress: {
    type: String,
    required: true,
  },
  emergencyContact: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
  },
  encounter: {
    date: Date,
    type: {
      type: String,
      enum: ['Emergency', 'OPD', 'Specialist Care'],
    },
  },
  vitals: {
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spo2: String,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
