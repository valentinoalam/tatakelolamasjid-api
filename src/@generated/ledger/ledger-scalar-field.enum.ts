import { registerEnumType } from '@nestjs/graphql';

export enum LedgerScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    reportPeriod = "reportPeriod",
    startWeekDay = "startWeekDay"
}


registerEnumType(LedgerScalarFieldEnum, { name: 'LedgerScalarFieldEnum', description: undefined })
