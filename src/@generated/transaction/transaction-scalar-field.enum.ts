import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    accountId = "accountId",
    vendorId = "vendorId",
    paymentMethodId = "paymentMethodId",
    type = "type",
    amount = "amount",
    description = "description",
    reference = "reference",
    dtTrx = "dtTrx",
    notaUrl = "notaUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
