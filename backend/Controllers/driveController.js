const VaccinationDrive = require('../models/vaccinationDrive');

// Create New Vaccination Drive
exports.createDrive = async (req, res) => {
  const { vaccineName, date, availableDoses, applicableGrades } = req.body;

  try {
    const drive = new VaccinationDrive({ vaccineName, date, availableDoses, applicableGrades });
    await drive.save();
    res.status(201).json(drive);
  } catch (err) {
    res.status(500).json({ message: 'Error creating vaccination drive' });
  }
};

// Update Vaccination Drive
exports.updateDrive = async (req, res) => {
  const { driveId } = req.params;
  const { vaccineName, date, availableDoses, applicableGrades } = req.body;

  try {
    const drive = await VaccinationDrive.findById(driveId);
    if (!drive) return res.status(404).json({ message: 'Drive not found' });

    drive.vaccineName = vaccineName || drive.vaccineName;
    drive.date = date || drive.date;
    drive.availableDoses = availableDoses || drive.availableDoses;
    drive.applicableGrades = applicableGrades || drive.applicableGrades;

    await drive.save();
    res.status(200).json(drive);
  } catch (err) {
    res.status(500).json({ message: 'Error updating vaccination drive' });
  }
};

// Get Upcoming Drives
exports.getUpcomingDrives = async (req, res) => {
  const today = new Date();
  const upcomingDrives = await VaccinationDrive.find({
    date: { $gte: today },
  }).sort({ date: 1 });

  res.status(200).json(upcomingDrives);
};
