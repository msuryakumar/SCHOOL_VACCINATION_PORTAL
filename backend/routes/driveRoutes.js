const express = require('express');
const router = express.Router();
const { createDrive, updateDrive, getUpcomingDrives } = require('../controllers/driveController');

router.post('/drive', createDrive);
router.put('/drive/:driveId', updateDrive);
router.get('/drives/upcoming', getUpcomingDrives);

module.exports = router;
