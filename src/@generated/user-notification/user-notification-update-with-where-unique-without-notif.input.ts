import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserNotificationWhereUniqueInput } from './user-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserNotificationUpdateWithoutNotifInput } from './user-notification-update-without-notif.input';

@InputType()
export class UserNotificationUpdateWithWhereUniqueWithoutNotifInput {

    @Field(() => UserNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>;

    @Field(() => UserNotificationUpdateWithoutNotifInput, {nullable:false})
    @Type(() => UserNotificationUpdateWithoutNotifInput)
    data!: UserNotificationUpdateWithoutNotifInput;
}
