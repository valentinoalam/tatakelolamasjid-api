import { registerEnumType } from '@nestjs/graphql';

export enum Period {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    QUARTERLY = "QUARTERLY",
    YEARLY = "YEARLY"
}


registerEnumType(Period, { name: 'Period', description: undefined })
