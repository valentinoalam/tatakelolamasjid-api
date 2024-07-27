import { registerEnumType } from '@nestjs/graphql';

export enum FamilyMemberScalarFieldEnum {
    id = "id",
    participantId = "participantId",
    name = "name",
    information = "information",
    relationType = "relationType"
}


registerEnumType(FamilyMemberScalarFieldEnum, { name: 'FamilyMemberScalarFieldEnum', description: undefined })
