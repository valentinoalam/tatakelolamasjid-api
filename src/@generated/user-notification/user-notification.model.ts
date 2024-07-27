import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Notification } from '../notification/notification.model';

@ObjectType()
export class UserNotification {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    notification_id!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Notification, {nullable:false})
    notif?: Notification;
}
