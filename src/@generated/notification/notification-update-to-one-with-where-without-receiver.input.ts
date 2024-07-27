import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutReceiverInput } from './notification-update-without-receiver.input';

@InputType()
export class NotificationUpdateToOneWithWhereWithoutReceiverInput {

    @Field(() => NotificationWhereInput, {nullable:true})
    @Type(() => NotificationWhereInput)
    where?: NotificationWhereInput;

    @Field(() => NotificationUpdateWithoutReceiverInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutReceiverInput)
    data!: NotificationUpdateWithoutReceiverInput;
}
