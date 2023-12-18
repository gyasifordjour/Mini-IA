const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/register', patientController.registerPatient);


router.post('/start-encounter', patientController.startEncounter);


router.post('/submit-vitals', patientController.submitVitals);


router.get('/patient-list', patientController.getPatientList);


router.get('/patient-details/:patientID', patientController.getPatientDetails);

module.exports = router;