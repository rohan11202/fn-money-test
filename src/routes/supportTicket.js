const express = require('express');
const router = express.Router();
const supportTicketController = require('../controllers/supportTicketController');

router.get('/', supportTicketController.getSupportTickets);
router.get('/:id', supportTicketController.getSupportTicketById);
router.post('/', supportTicketController.createSupportTicket);
router.put('/:id', supportTicketController.updateSupportTicket);
router.delete('/:id', supportTicketController.deleteSupportTicket);

module.exports = router;
