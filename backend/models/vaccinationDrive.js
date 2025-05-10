const mongoose = require('mongoose');

const vaccinationDriveSchema = new mongoose.Schema({
  vaccineName: { type: String, required: true },
  date: { type: Date, required: true },
  availableDoses: { type: Number, required: true },
  applicableGrades: { type: [String], required: true },  // Array of grades eligible
});

module.exports = mongoose.model('VaccinationDrive', vaccinationDriveSchema);
