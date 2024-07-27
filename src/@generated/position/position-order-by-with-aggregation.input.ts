import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PositionCountOrderByAggregateInput } from './position-count-order-by-aggregate.input';
import { PositionMaxOrderByAggregateInput } from './position-max-order-by-aggregate.input';
import { PositionMinOrderByAggregateInput } from './position-min-order-by-aggregate.input';

@InputType()
export class PositionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    eventId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => PositionCountOrderByAggregateInput, {nullable:true})
    _count?: PositionCountOrderByAggregateInput;

    @Field(() => PositionMaxOrderByAggregateInput, {nullable:true})
    _max?: PositionMaxOrderByAggregateInput;

    @Field(() => PositionMinOrderByAggregateInput, {nullable:true})
    _min?: PositionMinOrderByAggregateInput;
}
