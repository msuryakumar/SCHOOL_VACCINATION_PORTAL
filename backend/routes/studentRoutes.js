const express = require('express');
const router = express.Router();
const { addOrUpdateStudent, getStudents, bulkUploadStudents } = require('../controllers/studentController');

router.post('/student', addOrUpdateStudent);
router.get('/students', getStudents);
router.post('/students/bulk-upload', bulkUploadStudents);

module.exports = router;
