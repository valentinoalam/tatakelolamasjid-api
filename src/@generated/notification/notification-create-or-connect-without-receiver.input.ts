import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutReceiverInput } from './notification-create-without-receiver.input';

@InputType()
export class NotificationCreateOrConnectWithoutReceiverInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutReceiverInput, {nullable:false})
    @Type(() => NotificationCreateWithoutReceiverInput)
    create!: NotificationCreateWithoutReceiverInput;
}
