import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MemoCountOrderByAggregateInput } from './memo-count-order-by-aggregate.input';
import { MemoMaxOrderByAggregateInput } from './memo-max-order-by-aggregate.input';
import { MemoMinOrderByAggregateInput } from './memo-min-order-by-aggregate.input';

@InputType()
export class MemoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_done?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => MemoCountOrderByAggregateInput, {nullable:true})
    _count?: MemoCountOrderByAggregateInput;

    @Field(() => MemoMaxOrderByAggregateInput, {nullable:true})
    _max?: MemoMaxOrderByAggregateInput;

    @Field(() => MemoMinOrderByAggregateInput, {nullable:true})
    _min?: MemoMinOrderByAggregateInput;
}
