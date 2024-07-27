import { registerEnumType } from '@nestjs/graphql';

export enum PaymentMethodScalarFieldEnum {
    id = "id",
    userId = "userId",
    jenis_pembayaran = "jenis_pembayaran",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PaymentMethodScalarFieldEnum, { name: 'PaymentMethodScalarFieldEnum', description: undefined })
