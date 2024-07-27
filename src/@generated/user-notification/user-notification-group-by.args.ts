import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationWhereInput } from './user-notification-where.input';
import { Type } from 'class-transformer';
import { UserNotificationOrderByWithAggregationInput } from './user-notification-order-by-with-aggregation.input';
import { UserNotificationScalarFieldEnum } from './user-notification-scalar-field.enum';
import { UserNotificationScalarWhereWithAggregatesInput } from './user-notification-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserNotificationCountAggregateInput } from './user-notification-count-aggregate.input';
import { UserNotificationMinAggregateInput } from './user-notification-min-aggregate.input';
import { UserNotificationMaxAggregateInput } from './user-notification-max-aggregate.input';

@ArgsType()
export class UserNotificationGroupByArgs {

    @Field(() => UserNotificationWhereInput, {nullable:true})
    @Type(() => UserNotificationWhereInput)
    where?: UserNotificationWhereInput;

    @Field(() => [UserNotificationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserNotificationOrderByWithAggregationInput>;

    @Field(() => [UserNotificationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserNotificationScalarFieldEnum>;

    @Field(() => UserNotificationScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserNotificationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserNotificationCountAggregateInput, {nullable:true})
    _count?: UserNotificationCountAggregateInput;

    @Field(() => UserNotificationMinAggregateInput, {nullable:true})
    _min?: UserNotificationMinAggregateInput;

    @Field(() => UserNotificationMaxAggregateInput, {nullable:true})
    _max?: UserNotificationMaxAggregateInput;
}
