import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NotificationStatus } from '../prisma/notification-status.enum';
import { UserNotification } from '../user-notification/user-notification.model';
import { NotificationCount } from './notification-count.output';

@ObjectType()
export class Notification {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    sender!: string | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => String, {nullable:true})
    photoUrl!: string | null;

    @Field(() => Date, {nullable:false})
    dtCreated!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isReaded!: boolean;

    @Field(() => Date, {nullable:false})
    sentAt!: Date;

    @Field(() => NotificationStatus, {nullable:false})
    status!: keyof typeof NotificationStatus;

    @Field(() => [UserNotification], {nullable:true})
    receiver?: Array<UserNotification>;

    @Field(() => NotificationCount, {nullable:false})
    _count?: NotificationCount;
}
