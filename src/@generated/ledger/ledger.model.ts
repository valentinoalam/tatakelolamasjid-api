import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { WeekDay } from '../prisma/week-day.enum';
import { TrialBalance } from '../trial-balance/trial-balance.model';
import { LedgerCount } from './ledger-count.output';

@ObjectType()
export class Ledger {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Period, {nullable:false})
    reportPeriod!: keyof typeof Period;

    @Field(() => WeekDay, {nullable:false})
    startWeekDay!: keyof typeof WeekDay;

    @Field(() => [TrialBalance], {nullable:true})
    TrialBalance?: Array<TrialBalance>;

    @Field(() => LedgerCount, {nullable:false})
    _count?: LedgerCount;
}
