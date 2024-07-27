import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationStatus } from '../prisma/notification-status.enum';

@ObjectType()
export class NotificationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    photoUrl?: string;

    @Field(() => Date, {nullable:true})
    dtCreated?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isReaded?: boolean;

    @Field(() => Date, {nullable:true})
    sentAt?: Date | string;

    @Field(() => NotificationStatus, {nullable:true})
    status?: keyof typeof NotificationStatus;
}
