import { registerEnumType } from '@nestjs/graphql';

export enum UstadzScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    address = "address"
}


registerEnumType(UstadzScalarFieldEnum, { name: 'UstadzScalarFieldEnum', description: undefined })
