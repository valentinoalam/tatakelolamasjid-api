import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutReceiverInput } from './notification-create-without-receiver.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutReceiverInput } from './notification-create-or-connect-without-receiver.input';
import { NotificationUpsertWithoutReceiverInput } from './notification-upsert-without-receiver.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateToOneWithWhereWithoutReceiverInput } from './notification-update-to-one-with-where-without-receiver.input';

@InputType()
export class NotificationUpdateOneRequiredWithoutReceiverNestedInput {

    @Field(() => NotificationCreateWithoutReceiverInput, {nullable:true})
    @Type(() => NotificationCreateWithoutReceiverInput)
    create?: NotificationCreateWithoutReceiverInput;

    @Field(() => NotificationCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput;

    @Field(() => NotificationUpsertWithoutReceiverInput, {nullable:true})
    @Type(() => NotificationUpsertWithoutReceiverInput)
    upsert?: NotificationUpsertWithoutReceiverInput;

    @Field(() => NotificationWhereUniqueInput, {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateToOneWithWhereWithoutReceiverInput, {nullable:true})
    @Type(() => NotificationUpdateToOneWithWhereWithoutReceiverInput)
    update?: NotificationUpdateToOneWithWhereWithoutReceiverInput;
}
