import { registerEnumType } from '@nestjs/graphql';

export enum EmergencyContactScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    relationType = "relationType",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmergencyContactScalarFieldEnum, { name: 'EmergencyContactScalarFieldEnum', description: undefined })
