import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserNotificationCountOrderByAggregateInput } from './user-notification-count-order-by-aggregate.input';
import { UserNotificationMaxOrderByAggregateInput } from './user-notification-max-order-by-aggregate.input';
import { UserNotificationMinOrderByAggregateInput } from './user-notification-min-order-by-aggregate.input';

@InputType()
export class UserNotificationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notification_id?: keyof typeof SortOrder;

    @Field(() => UserNotificationCountOrderByAggregateInput, {nullable:true})
    _count?: UserNotificationCountOrderByAggregateInput;

    @Field(() => UserNotificationMaxOrderByAggregateInput, {nullable:true})
    _max?: UserNotificationMaxOrderByAggregateInput;

    @Field(() => UserNotificationMinOrderByAggregateInput, {nullable:true})
    _min?: UserNotificationMinOrderByAggregateInput;
}
