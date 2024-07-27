import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class BankAccountScalarWhereWithAggregatesInput {

    @Field(() => [BankAccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BankAccountScalarWhereWithAggregatesInput>;

    @Field(() => [BankAccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BankAccountScalarWhereWithAggregatesInput>;

    @Field(() => [BankAccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BankAccountScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bankName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accountNumber?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}