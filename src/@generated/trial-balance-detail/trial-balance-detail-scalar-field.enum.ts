import { registerEnumType } from '@nestjs/graphql';

export enum TrialBalanceDetailScalarFieldEnum {
    id = "id",
    trialBalanceId = "trialBalanceId",
    accountId = "accountId",
    isDebit = "isDebit",
    openingBalance = "openingBalance",
    closingBalance = "closingBalance",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TrialBalanceDetailScalarFieldEnum, { name: 'TrialBalanceDetailScalarFieldEnum', description: undefined })
