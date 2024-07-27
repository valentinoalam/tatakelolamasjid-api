import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserNotificationWhereUniqueInput } from './user-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserNotificationCreateWithoutNotifInput } from './user-notification-create-without-notif.input';

@InputType()
export class UserNotificationCreateOrConnectWithoutNotifInput {

    @Field(() => UserNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>;

    @Field(() => UserNotificationCreateWithoutNotifInput, {nullable:false})
    @Type(() => UserNotificationCreateWithoutNotifInput)
    create!: UserNotificationCreateWithoutNotifInput;
}
