const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getEmployees = async (req, res) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  const employee = await prisma.employee.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(employee);
};

const createEmployee = async (req, res) => {
  const {
    username, password, email, name, gender, mobile, extension, title, nickname
  } = req.body;

  const employee = await prisma.employee.create({
    data: {
      username,
      password,
      email,
      name,
      gender,
      mobile,
      extension,
      title,
      nickname,
    },
  });
  res.json(employee);
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    username, password, email, name, gender, mobile, extension, title, nickname
  } = req.body;

  const employee = await prisma.employee.update({
    where: { id: parseInt(id) },
    data: {
      username,
      password,
      email,
      name,
      gender,
      mobile,
      extension,
      title,
      nickname,
    },
  });
  res.json(employee);
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await prisma.employee.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
