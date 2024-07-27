import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccountCategoryCountOrderByAggregateInput } from './account-category-count-order-by-aggregate.input';
import { AccountCategoryMaxOrderByAggregateInput } from './account-category-max-order-by-aggregate.input';
import { AccountCategoryMinOrderByAggregateInput } from './account-category-min-order-by-aggregate.input';

@InputType()
export class AccountCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => AccountCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: AccountCategoryCountOrderByAggregateInput;

    @Field(() => AccountCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: AccountCategoryMaxOrderByAggregateInput;

    @Field(() => AccountCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: AccountCategoryMinOrderByAggregateInput;
}
