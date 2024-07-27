import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCreateWithoutNotifInput } from './user-notification-create-without-notif.input';
import { Type } from 'class-transformer';
import { UserNotificationCreateOrConnectWithoutNotifInput } from './user-notification-create-or-connect-without-notif.input';
import { UserNotificationCreateManyNotifInputEnvelope } from './user-notification-create-many-notif-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserNotificationWhereUniqueInput } from './user-notification-where-unique.input';

@InputType()
export class UserNotificationCreateNestedManyWithoutNotifInput {

    @Field(() => [UserNotificationCreateWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationCreateWithoutNotifInput)
    create?: Array<UserNotificationCreateWithoutNotifInput>;

    @Field(() => [UserNotificationCreateOrConnectWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationCreateOrConnectWithoutNotifInput)
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutNotifInput>;

    @Field(() => UserNotificationCreateManyNotifInputEnvelope, {nullable:true})
    @Type(() => UserNotificationCreateManyNotifInputEnvelope)
    createMany?: UserNotificationCreateManyNotifInputEnvelope;

    @Field(() => [UserNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>>;
}
