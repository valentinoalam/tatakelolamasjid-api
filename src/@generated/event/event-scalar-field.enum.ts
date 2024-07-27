import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    name = "name",
    place = "place",
    dtStart = "dtStart",
    dtEnd = "dtEnd",
    quota = "quota",
    description = "description",
    heldPeriod = "heldPeriod",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
