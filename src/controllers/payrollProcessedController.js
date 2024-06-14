const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPayrolls = async (req, res) => {
  const payrolls = await prisma.payrollProcessed.findMany();
  res.json(payrolls);
};

const getPayrollById = async (req, res) => {
  const { id } = req.params;
  const payroll = await prisma.payrollProcessed.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(payroll);
};

const createPayroll = async (req, res) => {
  const { employeeId, earnings, deductions } = req.body;

  const payroll = await prisma.payrollProcessed.create({
    data: {
      employeeId,
      earnings,
      deductions,
    },
  });
  res.json(payroll);
};

const updatePayroll = async (req, res) => {
  const { id } = req.params;
  const { employeeId, earnings, deductions } = req.body;

  const payroll = await prisma.payrollProcessed.update({
    where: { id: parseInt(id) },
    data: {
      employeeId,
      earnings,
      deductions,
    },
  });
  res.json(payroll);
};

const deletePayroll = async (req, res) => {
  const { id } = req.params;
  await prisma.payrollProcessed.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getPayrolls,
  getPayrollById,
  createPayroll,
  updatePayroll,
  deletePayroll,
};
