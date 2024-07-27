import { registerEnumType } from '@nestjs/graphql';

export enum VendorScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    address = "address",
    businessField = "businessField",
    note = "note",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(VendorScalarFieldEnum, { name: 'VendorScalarFieldEnum', description: undefined })
