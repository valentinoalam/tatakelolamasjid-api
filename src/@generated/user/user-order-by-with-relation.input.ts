import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserNotificationOrderByRelationAggregateInput } from '../user-notification/user-notification-order-by-relation-aggregate.input';
import { PaymentMethodOrderByRelationAggregateInput } from '../payment-method/payment-method-order-by-relation-aggregate.input';
import { MemoOrderByRelationAggregateInput } from '../memo/memo-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { PositionOrderByWithRelationInput } from '../position/position-order-by-with-relation.input';
import { ParticipantOrderByRelationAggregateInput } from '../participant/participant-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    api_token?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => UserNotificationOrderByRelationAggregateInput, {nullable:true})
    notification?: UserNotificationOrderByRelationAggregateInput;

    @Field(() => PaymentMethodOrderByRelationAggregateInput, {nullable:true})
    paymentMethod?: PaymentMethodOrderByRelationAggregateInput;

    @Field(() => MemoOrderByRelationAggregateInput, {nullable:true})
    memo?: MemoOrderByRelationAggregateInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => PositionOrderByWithRelationInput, {nullable:true})
    position?: PositionOrderByWithRelationInput;

    @Field(() => ParticipantOrderByRelationAggregateInput, {nullable:true})
    Participant?: ParticipantOrderByRelationAggregateInput;
}
