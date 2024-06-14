-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "personalEmail" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "spouseName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "residentialStatus" TEXT NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "countryOfOrigin" TEXT NOT NULL,
    "religionName" TEXT NOT NULL,
    "internationalEmployee" BOOLEAN NOT NULL,
    "physicallyChallenged" BOOLEAN NOT NULL,
    "isDirector" BOOLEAN NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accounts" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "ifsc" TEXT NOT NULL,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperAdmin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "domainName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "suffix" TEXT NOT NULL,
    "hrLoginUsername" TEXT NOT NULL,
    "hrLoginPassword" TEXT NOT NULL,
    "hrEmployeeId" TEXT NOT NULL,
    "hrEmployeeEmail" TEXT NOT NULL,
    "hrEmployeeName" TEXT NOT NULL,
    "hrEmployeeGender" TEXT NOT NULL,
    "hrEmployeeMobile" TEXT NOT NULL,
    "hrEmployeeExtension" TEXT NOT NULL,
    "hrEmployeeTitle" TEXT NOT NULL,
    "hrEmployeeNickName" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayrollProcessed" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "earnings" TEXT NOT NULL,
    "deductions" TEXT NOT NULL,

    CONSTRAINT "PayrollProcessed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportTicket" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "SupportTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaveApplication" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "leaveType" TEXT NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "LeaveApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_employeeId_key" ON "Profile"("employeeId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayrollProcessed" ADD CONSTRAINT "PayrollProcessed_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportTicket" ADD CONSTRAINT "SupportTicket_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveApplication" ADD CONSTRAINT "LeaveApplication_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
