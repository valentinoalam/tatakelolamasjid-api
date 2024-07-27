import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryWhereInput } from './account-category-where.input';
import { Type } from 'class-transformer';
import { AccountCategoryOrderByWithRelationInput } from './account-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AccountCategoryWhereUniqueInput } from './account-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AccountCategoryCountAggregateInput } from './account-category-count-aggregate.input';
import { AccountCategoryMinAggregateInput } from './account-category-min-aggregate.input';
import { AccountCategoryMaxAggregateInput } from './account-category-max-aggregate.input';

@ArgsType()
export class AccountCategoryAggregateArgs {

    @Field(() => AccountCategoryWhereInput, {nullable:true})
    @Type(() => AccountCategoryWhereInput)
    where?: AccountCategoryWhereInput;

    @Field(() => [AccountCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountCategoryOrderByWithRelationInput>;

    @Field(() => AccountCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AccountCategoryWhereUniqueInput, 'id'>;

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
