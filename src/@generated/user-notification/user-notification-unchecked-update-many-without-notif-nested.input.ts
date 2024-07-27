import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCreateWithoutNotifInput } from './user-notification-create-without-notif.input';
import { Type } from 'class-transformer';
import { UserNotificationCreateOrConnectWithoutNotifInput } from './user-notification-create-or-connect-without-notif.input';
import { UserNotificationUpsertWithWhereUniqueWithoutNotifInput } from './user-notification-upsert-with-where-unique-without-notif.input';
import { UserNotificationCreateManyNotifInputEnvelope } from './user-notification-create-many-notif-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserNotificationWhereUniqueInput } from './user-notification-where-unique.input';
import { UserNotificationUpdateWithWhereUniqueWithoutNotifInput } from './user-notification-update-with-where-unique-without-notif.input';
import { UserNotificationUpdateManyWithWhereWithoutNotifInput } from './user-notification-update-many-with-where-without-notif.input';
import { UserNotificationScalarWhereInput } from './user-notification-scalar-where.input';

@InputType()
export class UserNotificationUncheckedUpdateManyWithoutNotifNestedInput {

    @Field(() => [UserNotificationCreateWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationCreateWithoutNotifInput)
    create?: Array<UserNotificationCreateWithoutNotifInput>;

    @Field(() => [UserNotificationCreateOrConnectWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationCreateOrConnectWithoutNotifInput)
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutNotifInput>;

    @Field(() => [UserNotificationUpsertWithWhereUniqueWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationUpsertWithWhereUniqueWithoutNotifInput)
    upsert?: Array<UserNotificationUpsertWithWhereUniqueWithoutNotifInput>;

    @Field(() => UserNotificationCreateManyNotifInputEnvelope, {nullable:true})
    @Type(() => UserNotificationCreateManyNotifInputEnvelope)
    createMany?: UserNotificationCreateManyNotifInputEnvelope;

    @Field(() => [UserNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>>;

    @Field(() => [UserNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>>;

    @Field(() => [UserNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>>;

    @Field(() => [UserNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id' | 'userId_notification_id'>>;

    @Field(() => [UserNotificationUpdateWithWhereUniqueWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationUpdateWithWhereUniqueWithoutNotifInput)
    update?: Array<UserNotificationUpdateWithWhereUniqueWithoutNotifInput>;

    @Field(() => [UserNotificationUpdateManyWithWhereWithoutNotifInput], {nullable:true})
    @Type(() => UserNotificationUpdateManyWithWhereWithoutNotifInput)
    updateMany?: Array<UserNotificationUpdateManyWithWhereWithoutNotifInput>;

    @Field(() => [UserNotificationScalarWhereInput], {nullable:true})
    @Type(() => UserNotificationScalarWhereInput)
    deleteMany?: Array<UserNotificationScalarWhereInput>;
}
