import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserNotificationOrderByRelationAggregateInput } from '../user-notification/user-notification-order-by-relation-aggregate.input';

@InputType()
export class NotificationOrderByWithRelationInput {

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

    @Field(() => UserNotificationOrderByRelationAggregateInput, {nullable:true})
    receiver?: UserNotificationOrderByRelationAggregateInput;
}
