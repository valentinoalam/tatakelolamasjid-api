import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { WeekDay } from '../prisma/week-day.enum';

@ObjectType()
export class LedgerMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Period, {nullable:true})
    reportPeriod?: keyof typeof Period;

    @Field(() => WeekDay, {nullable:true})
    startWeekDay?: keyof typeof WeekDay;
}
