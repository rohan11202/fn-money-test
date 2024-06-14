const express = require('express');
const router = express.Router();
const leaveApplicationController = require('../controllers/leaveApplicationController');

router.get('/', leaveApplicationController.getLeaveApplications);
router.get('/:id', leaveApplicationController.getLeaveApplicationById);
router.post('/', leaveApplicationController.createLeaveApplication);
router.put('/:id', leaveApplicationController.updateLeaveApplication);
router.delete('/:id', leaveApplicationController.deleteLeaveApplication);

module.exports = router;
