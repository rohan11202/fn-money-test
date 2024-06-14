const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAccounts = async (req, res) => {
  const accounts = await prisma.accounts.findMany();
  res.json(accounts);
};

const getAccountById = async (req, res) => {
  const { id } = req.params;
  const account = await prisma.accounts.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(account);
};

const createAccount = async (req, res) => {
  const { employeeId, accountNumber, bankName, ifsc } = req.body;

  const account = await prisma.accounts.create({
    data: {
      employeeId,
      accountNumber,
      bankName,
      ifsc,
    },
  });
  res.json(account);
};

const updateAccount = async (req, res) => {
  const { id } = req.params;
  const { employeeId, accountNumber, bankName, ifsc } = req.body;

  const account = await prisma.accounts.update({
    where: { id: parseInt(id) },
    data: {
      employeeId,
      accountNumber,
      bankName,
      ifsc,
    },
  });
  res.json(account);
};

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  await prisma.accounts.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
