import { registerEnumType } from '@nestjs/graphql';

export enum BankAccountScalarFieldEnum {
    id = "id",
    bankName = "bankName",
    accountNumber = "accountNumber",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BankAccountScalarFieldEnum, { name: 'BankAccountScalarFieldEnum', description: undefined })
