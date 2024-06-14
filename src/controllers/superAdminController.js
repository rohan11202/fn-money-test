const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSuperAdmins = async (req, res) => {
  const superAdmins = await prisma.superAdmin.findMany();
  res.json(superAdmins);
};

const getSuperAdminById = async (req, res) => {
  const { id } = req.params;
  const superAdmin = await prisma.superAdmin.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(superAdmin);
};

const createSuperAdmin = async (req, res) => {
  const { username, password } = req.body;

  const superAdmin = await prisma.superAdmin.create({
    data: {
      username,
      password,
    },
  });
  res.json(superAdmin);
};

const updateSuperAdmin = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  const superAdmin = await prisma.superAdmin.update({
    where: { id: parseInt(id) },
    data: {
      username,
      password,
    },
  });
  res.json(superAdmin);
};

const deleteSuperAdmin = async (req, res) => {
  const { id } = req.params;
  await prisma.superAdmin.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getSuperAdmins,
  getSuperAdminById,
  createSuperAdmin,
  updateSuperAdmin,
  deleteSuperAdmin,
};
