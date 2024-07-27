/*
  Warnings:

  - Added the required column `emergencyId` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notaUrl` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "emergencyId" CHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "notaUrl" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_emergencyId_fkey" FOREIGN KEY ("emergencyId") REFERENCES "EmergencyContact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
