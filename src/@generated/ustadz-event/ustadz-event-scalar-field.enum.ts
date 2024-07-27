import { registerEnumType } from '@nestjs/graphql';

export enum UstadzEventScalarFieldEnum {
    id = "id",
    ustadzId = "ustadzId",
    eventId = "eventId"
}


registerEnumType(UstadzEventScalarFieldEnum, { name: 'UstadzEventScalarFieldEnum', description: undefined })
