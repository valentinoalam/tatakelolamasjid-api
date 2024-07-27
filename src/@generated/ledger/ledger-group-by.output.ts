import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { WeekDay } from '../prisma/week-day.enum';
import { LedgerCountAggregate } from './ledger-count-aggregate.output';
import { LedgerMinAggregate } from './ledger-min-aggregate.output';
import { LedgerMaxAggregate } from './ledger-max-aggregate.output';

@ObjectType()
export class LedgerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Period, {nullable:false})
    reportPeriod!: keyof typeof Period;

    @Field(() => WeekDay, {nullable:false})
    startWeekDay!: keyof typeof WeekDay;

    @Field(() => LedgerCountAggregate, {nullable:true})
    _count?: LedgerCountAggregate;

    @Field(() => LedgerMinAggregate, {nullable:true})
    _min?: LedgerMinAggregate;

    @Field(() => LedgerMaxAggregate, {nullable:true})
    _max?: LedgerMaxAggregate;
}
