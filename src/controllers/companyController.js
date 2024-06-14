const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCompanies = async (req, res) => {
  const companies = await prisma.company.findMany();
  res.json(companies);
};

const getCompanyById = async (req, res) => {
  const { id } = req.params;
  const company = await prisma.company.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(company);
};

const createCompany = async (req, res) => {
  const {
    name, domainName, address, prefix, suffix, hrLoginUsername, hrLoginPassword,
    hrEmployeeId, hrEmployeeEmail, hrEmployeeName, hrEmployeeGender, hrEmployeeMobile,
    hrEmployeeExtension, hrEmployeeTitle, hrEmployeeNickName
  } = req.body;

  const company = await prisma.company.create({
    data: {
      name,
      domainName,
      address,
      prefix,
      suffix,
      hrLoginUsername,
      hrLoginPassword,
      hrEmployeeId,
      hrEmployeeEmail,
      hrEmployeeName,
      hrEmployeeGender,
      hrEmployeeMobile,
      hrEmployeeExtension,
      hrEmployeeTitle,
      hrEmployeeNickName,
    },
  });
  res.json(company);
};

const updateCompany = async (req, res) => {
  const { id } = req.params;
  const {
    name, domainName, address, prefix, suffix, hrLoginUsername, hrLoginPassword,
    hrEmployeeId, hrEmployeeEmail, hrEmployeeName, hrEmployeeGender, hrEmployeeMobile,
    hrEmployeeExtension, hrEmployeeTitle, hrEmployeeNickName
  } = req.body;

  const company = await prisma.company.update({
    where: { id: parseInt(id) },
    data: {
      name,
      domainName,
      address,
      prefix,
      suffix,
      hrLoginUsername,
      hrLoginPassword,
      hrEmployeeId,
      hrEmployeeEmail,
      hrEmployeeName,
      hrEmployeeGender,
      hrEmployeeMobile,
      hrEmployeeExtension,
      hrEmployeeTitle,
      hrEmployeeNickName,
    },
  });
  res.json(company);
};

const deleteCompany = async (req, res) => {
  const { id } = req.params;
  await prisma.company.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
