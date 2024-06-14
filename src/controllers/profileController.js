const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProfiles = async (req, res) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
};

const getProfileById = async (req, res) => {
  const { id } = req.params;
  const profile = await prisma.profile.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(profile);
};

const createProfile = async (req, res) => {
  const {
    employeeId, dateOfBirth, bloodGroup, personalEmail, fatherName, maritalStatus, spouseName,
    nationality, residentialStatus, placeOfBirth, countryOfOrigin, religionName,
    internationalEmployee, physicallyChallenged, isDirector
  } = req.body;

  const profile = await prisma.profile.create({
    data: {
      employeeId,
      dateOfBirth,
      bloodGroup,
      personalEmail,
      fatherName,
      maritalStatus,
      spouseName,
      nationality,
      residentialStatus,
      placeOfBirth,
      countryOfOrigin,
      religionName,
      internationalEmployee,
      physicallyChallenged,
      isDirector,
    },
  });
  res.json(profile);
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const {
    employeeId, dateOfBirth, bloodGroup, personalEmail, fatherName, maritalStatus, spouseName,
    nationality, residentialStatus, placeOfBirth, countryOfOrigin, religionName,
    internationalEmployee, physicallyChallenged, isDirector
  } = req.body;

  const profile = await prisma.profile.update({
    where: { id: parseInt(id) },
    data: {
      employeeId,
      dateOfBirth,
      bloodGroup,
      personalEmail,
      fatherName,
      maritalStatus,
      spouseName,
      nationality,
      residentialStatus,
      placeOfBirth,
      countryOfOrigin,
      religionName,
      internationalEmployee,
      physicallyChallenged,
      isDirector,
    },
  });
  res.json(profile);
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  await prisma.profile.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

module.exports = {
  getProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
};
