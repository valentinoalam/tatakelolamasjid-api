import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryWhereInput } from './account-category-where.input';
import { Type } from 'class-transformer';
import { AccountCategoryOrderByWithAggregationInput } from './account-category-order-by-with-aggregation.input';
import { AccountCategoryScalarFieldEnum } from './account-category-scalar-field.enum';
import { AccountCategoryScalarWhereWithAggregatesInput } from './account-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AccountCategoryCountAggregateInput } from './account-category-count-aggregate.input';
import { AccountCategoryMinAggregateInput } from './account-category-min-aggregate.input';
import { AccountCategoryMaxAggregateInput } from './account-category-max-aggregate.input';

@ArgsType()
export class AccountCategoryGroupByArgs {

    @Field(() => AccountCategoryWhereInput, {nullable:true})
    @Type(() => AccountCategoryWhereInput)
    where?: AccountCategoryWhereInput;

    @Field(() => [AccountCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AccountCategoryOrderByWithAggregationInput>;

    @Field(() => [AccountCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AccountCategoryScalarFieldEnum>;

    @Field(() => AccountCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: AccountCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AccountCategoryCountAggregateInput, {nullable:true})
    _count?: AccountCategoryCountAggregateInput;

    @Field(() => AccountCategoryMinAggregateInput, {nullable:true})
    _min?: AccountCategoryMinAggregateInput;

    @Field(() => AccountCategoryMaxAggregateInput, {nullable:true})
    _max?: AccountCategoryMaxAggregateInput;
}
