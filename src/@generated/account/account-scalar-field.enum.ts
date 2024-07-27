import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    bankAccId = "bankAccId",
    parentAccountId = "parentAccountId",
    name = "name",
    type = "type",
    description = "description",
    balance = "balance",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
