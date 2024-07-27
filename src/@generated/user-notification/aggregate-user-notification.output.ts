import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserNotificationCountAggregate } from './user-notification-count-aggregate.output';
import { UserNotificationMinAggregate } from './user-notification-min-aggregate.output';
import { UserNotificationMaxAggregate } from './user-notification-max-aggregate.output';

@ObjectType()
export class AggregateUserNotification {

    @Field(() => UserNotificationCountAggregate, {nullable:true})
    _count?: UserNotificationCountAggregate;

    @Field(() => UserNotificationMinAggregate, {nullable:true})
    _min?: UserNotificationMinAggregate;

    @Field(() => UserNotificationMaxAggregate, {nullable:true})
    _max?: UserNotificationMaxAggregate;
}
