const Student = require('../models/student');

// Add or Update Student
exports.addOrUpdateStudent = async (req, res) => {
  const { studentId, name, grade, vaccinatedStatus } = req.body;

  try {
    let student = await Student.findOne({ studentId });

    if (student) {
      student.name = name || student.name;
      student.grade = grade || student.grade;
      student.vaccinatedStatus = vaccinatedStatus || student.vaccinatedStatus;
    } else {
      student = new Student({ studentId, name, grade, vaccinatedStatus });
    }

    await student.save();
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: 'Error adding or updating student' });
  }
};

// List Students
exports.getStudents = async (req, res) => {
  const { vaccinatedStatus } = req.query;

  try {
    const students = await Student.find({ vaccinatedStatus });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching students' });
  }
};

// Bulk upload students (via CSV)
exports.bulkUploadStudents = async (req, res) => {
  // CSV handling logic here (will likely use a library like csv-parser or fast-csv)
  res.status(200).json({ message: 'Students uploaded successfully' });
};
