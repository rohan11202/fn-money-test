const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSupportTickets = async (req, res) => {
  const supportTickets = await prisma.supportTicket.findMany();
  res.json(supportTickets);
};

const getSupportTicketById = async (req, res) => {
  const { id } = req.params;
  const supportTicket = await prisma.supportTicket.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(supportTicket);
};

const createSupportTicket = async (req, res) => {
  const { employeeId, category, subject, message, status } = req.body;

  const supportTicket = await prisma.supportTicket.create({
    data: {
      employeeId,
      category,
      subject,
      message,
      status,
    },
  });
  res.json(supportTicket);
};

const updateSupportTicket = async (req, res) => {
  const { id } = req.params;
  const { employeeId, category, subject, message, status } = req.body;

  const supportTicket = await prisma.supportTicket.update({
    where: { id: parseInt(id) },
    data: {
      employeeId,
      category,
      subject,
      message,
      status,
    },
  });
  res.json(supportTicket);
};

const deleteSupportTicket = async (req, res) => {
  const { id } = req.params;
  await prisma.supportTicket.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getSupportTickets,
  getSupportTicketById,
  createSupportTicket,
  updateSupportTicket,
  deleteSupportTicket,
};
