const express = require('express');
const router = express();

const employeeRoutes = require('./employee');
const profileRoutes = require('./profile');
const accountsRoutes = require('./accounts');
const superAdminRoutes = require('./superAdmin');
const companyRoutes = require('./company');
const payrollProcessedRoutes = require('./payrollProcessed');
const supportTicketRoutes = require('./supportTicket');
const leaveApplicationRoutes = require('./leaveApplication.js');


router.use('/employees', employeeRoutes);
router.use('/profiles', profileRoutes);
router.use('/accounts', accountsRoutes);
router.use('/superadmins', superAdminRoutes);
router.use('/companies', companyRoutes);
router.use('/payrolls', payrollProcessedRoutes);
router.use('/support-tickets', supportTicketRoutes);
router.use('/leave-applications', leaveApplicationRoutes);

module.exports = router