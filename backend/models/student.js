const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  grade: { type: String, required: true },
  vaccinatedStatus: { type: Boolean, default: false },  // false if not vaccinated
});

module.exports = mongoose.model('Student', studentSchema);
