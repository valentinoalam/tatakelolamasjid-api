import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumPeriodFilter } from '../prisma/enum-period-filter.input';
import { EnumWeekDayFilter } from '../prisma/enum-week-day-filter.input';
import { TrialBalanceListRelationFilter } from '../trial-balance/trial-balance-list-relation-filter.input';

@InputType()
export class LedgerWhereInput {

    @Field(() => [LedgerWhereInput], {nullable:true})
    AND?: Array<LedgerWhereInput>;

    @Field(() => [LedgerWhereInput], {nullable:true})
    OR?: Array<LedgerWhereInput>;

    @Field(() => [LedgerWhereInput], {nullable:true})
    NOT?: Array<LedgerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => EnumPeriodFilter, {nullable:true})
    reportPeriod?: EnumPeriodFilter;

    @Field(() => EnumWeekDayFilter, {nullable:true})
    startWeekDay?: EnumWeekDayFilter;

    @Field(() => TrialBalanceListRelationFilter, {nullable:true})
    TrialBalance?: TrialBalanceListRelationFilter;
}
