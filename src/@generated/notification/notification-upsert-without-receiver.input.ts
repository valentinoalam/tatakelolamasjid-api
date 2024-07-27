import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationUpdateWithoutReceiverInput } from './notification-update-without-receiver.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutReceiverInput } from './notification-create-without-receiver.input';
import { NotificationWhereInput } from './notification-where.input';

@InputType()
export class NotificationUpsertWithoutReceiverInput {

    @Field(() => NotificationUpdateWithoutReceiverInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutReceiverInput)
    update!: NotificationUpdateWithoutReceiverInput;

    @Field(() => NotificationCreateWithoutReceiverInput, {nullable:false})
    @Type(() => NotificationCreateWithoutReceiverInput)
    create!: NotificationCreateWithoutReceiverInput;

    @Field(() => NotificationWhereInput, {nullable:true})
    @Type(() => NotificationWhereInput)
    where?: NotificationWhereInput;
}
