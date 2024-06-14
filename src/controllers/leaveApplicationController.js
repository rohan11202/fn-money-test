const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getLeaveApplications = async (req, res) => {
  const leaveApplications = await prisma.leaveApplication.findMany();
  res.json(leaveApplications);
};

const getLeaveApplicationById = async (req, res) => {
  const { id } = req.params;
  const leaveApplication = await prisma.leaveApplication.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(leaveApplication);
};

const createLeaveApplication = async (req, res) => {
  const { employeeId, startDate, endDate, leaveType, reason } = req.body;

  const leaveApplication = await prisma.leaveApplication.create({
    data: {
      employeeId,
      startDate,
      endDate,
      leaveType,
      reason,
    },
  });
  res.json(leaveApplication);
};

const updateLeaveApplication = async (req, res) => {
  const { id } = req.params;
  const { employeeId, startDate, endDate, leaveType, reason } = req.body;

  const leaveApplication = await prisma.leaveApplication.update({
    where: { id: parseInt(id) },
    data: {
      employeeId,
      startDate,
      endDate,
      leaveType,
      reason,
    },
  });
  res.json(leaveApplication);
};

const deleteLeaveApplication = async (req, res) => {
  const { id } = req.params;
  await prisma.leaveApplication.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getLeaveApplications,
  getLeaveApplicationById,
  createLeaveApplication,
  updateLeaveApplication,
  deleteLeaveApplication,
};
