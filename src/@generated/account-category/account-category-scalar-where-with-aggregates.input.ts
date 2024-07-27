import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class AccountCategoryScalarWhereWithAggregatesInput {

    @Field(() => [AccountCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccountCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [AccountCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccountCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [AccountCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccountCategoryScalarWhereWithAggregatesInput>;

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
}
