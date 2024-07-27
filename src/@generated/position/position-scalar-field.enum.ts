import { registerEnumType } from '@nestjs/graphql';

export enum PositionScalarFieldEnum {
    id = "id",
    userId = "userId",
    eventId = "eventId",
    name = "name",
    periode = "periode",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PositionScalarFieldEnum, { name: 'PositionScalarFieldEnum', description: undefined })
