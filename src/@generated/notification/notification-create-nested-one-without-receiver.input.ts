import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutReceiverInput } from './notification-create-without-receiver.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutReceiverInput } from './notification-create-or-connect-without-receiver.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedOneWithoutReceiverInput {

    @Field(() => NotificationCreateWithoutReceiverInput, {nullable:true})
    @Type(() => NotificationCreateWithoutReceiverInput)
    create?: NotificationCreateWithoutReceiverInput;

    @Field(() => NotificationCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput;

    @Field(() => NotificationWhereUniqueInput, {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
