import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventCountOrderByAggregateInput } from './event-count-order-by-aggregate.input';
import { EventAvgOrderByAggregateInput } from './event-avg-order-by-aggregate.input';
import { EventMaxOrderByAggregateInput } from './event-max-order-by-aggregate.input';
import { EventMinOrderByAggregateInput } from './event-min-order-by-aggregate.input';
import { EventSumOrderByAggregateInput } from './event-sum-order-by-aggregate.input';

@InputType()
export class EventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    place?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dtStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dtEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quota?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    heldPeriod?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => EventCountOrderByAggregateInput, {nullable:true})
    _count?: EventCountOrderByAggregateInput;

    @Field(() => EventAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventAvgOrderByAggregateInput;

    @Field(() => EventMaxOrderByAggregateInput, {nullable:true})
    _max?: EventMaxOrderByAggregateInput;

    @Field(() => EventMinOrderByAggregateInput, {nullable:true})
    _min?: EventMinOrderByAggregateInput;

    @Field(() => EventSumOrderByAggregateInput, {nullable:true})
    _sum?: EventSumOrderByAggregateInput;
}
