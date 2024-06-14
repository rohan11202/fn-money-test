const express = require('express');
const router = express.Router();
const payrollProcessedController = require('../controllers/payrollProcessedController');

router.get('/', payrollProcessedController.getPayrolls);
router.get('/:id', payrollProcessedController.getPayrollById);
router.post('/', payrollProcessedController.createPayroll);
router.put('/:id', payrollProcessedController.updatePayroll);
router.delete('/:id', payrollProcessedController.deletePayroll);

module.exports = router;
