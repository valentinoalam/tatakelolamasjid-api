import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationWhereInput } from './user-notification-where.input';
import { Type } from 'class-transformer';
import { UserNotificationOrderByWithRelationInput } from './user-notification-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserNotificationWhereUniqueInput } from './user-notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserNotificationCountAggregateInput } from './user-notification-count-aggregate.input';
import { UserNotificationMinAggregateInput } from './user-notification-min-aggregate.input';
import { UserNotificationMaxAggregateInput } from './user-notification-max-aggregate.input';

@ArgsType()
export class UserNotificationAggregateArgs {

    @Field(() => UserNotificationWhereInput, {nullable:true})
    @Type(() => UserNotificationWhereInput)
    where?: UserNotificationWhereInput;

    @Field(() => [UserNotificationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;

    @Field(() => UserNotificationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>;

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