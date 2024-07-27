import { registerEnumType } from '@nestjs/graphql';

export enum TrialBalanceScalarFieldEnum {
    id = "id",
    ledgerId = "ledgerId",
    periodStart = "periodStart",
    periodEnd = "periodEnd",
    totalDebit = "totalDebit",
    totalCredit = "totalCredit",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TrialBalanceScalarFieldEnum, { name: 'TrialBalanceScalarFieldEnum', description: undefined })
