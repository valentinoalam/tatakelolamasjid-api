import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationStatus } from '../prisma/notification-status.enum';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class NotificationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => String, {nullable:true})
    photoUrl?: string;

    @Field(() => Date, {nullable:false})
    dtCreated!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isReaded!: boolean;

    @Field(() => Date, {nullable:false})
    sentAt!: Date | string;

    @Field(() => NotificationStatus, {nullable:false})
    status!: keyof typeof NotificationStatus;

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
