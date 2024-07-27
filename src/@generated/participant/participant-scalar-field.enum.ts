import { registerEnumType } from '@nestjs/graphql';

export enum ParticipantScalarFieldEnum {
    id = "id",
    userId = "userId",
    eventId = "eventId",
    profileId = "profileId",
    emergencyId = "emergencyId",
    withFamily = "withFamily",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ParticipantScalarFieldEnum, { name: 'ParticipantScalarFieldEnum', description: undefined })
