import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    dtBirth = "dtBirth",
    isMan = "isMan",
    address = "address",
    domisili = "domisili",
    fullname = "fullname",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
