import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumPeriodWithAggregatesFilter } from '../prisma/enum-period-with-aggregates-filter.input';
import { EnumWeekDayWithAggregatesFilter } from '../prisma/enum-week-day-with-aggregates-filter.input';

@InputType()
export class LedgerScalarWhereWithAggregatesInput {

    @Field(() => [LedgerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LedgerScalarWhereWithAggregatesInput>;

    @Field(() => [LedgerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LedgerScalarWhereWithAggregatesInput>;

    @Field(() => [LedgerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LedgerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumPeriodWithAggregatesFilter, {nullable:true})
    reportPeriod?: EnumPeriodWithAggregatesFilter;

    @Field(() => EnumWeekDayWithAggregatesFilter, {nullable:true})
    startWeekDay?: EnumWeekDayWithAggregatesFilter;
}
