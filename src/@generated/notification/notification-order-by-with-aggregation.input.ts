import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NotificationCountOrderByAggregateInput } from './notification-count-order-by-aggregate.input';
import { NotificationMaxOrderByAggregateInput } from './notification-max-order-by-aggregate.input';
import { NotificationMinOrderByAggregateInput } from './notification-min-order-by-aggregate.input';

@InputType()
export class NotificationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    sender?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    photoUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    dtCreated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isReaded?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sentAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => NotificationCountOrderByAggregateInput, {nullable:true})
    _count?: NotificationCountOrderByAggregateInput;

    @Field(() => NotificationMaxOrderByAggregateInput, {nullable:true})
    _max?: NotificationMaxOrderByAggregateInput;

    @Field(() => NotificationMinOrderByAggregateInput, {nullable:true})
    _min?: NotificationMinOrderByAggregateInput;
}
