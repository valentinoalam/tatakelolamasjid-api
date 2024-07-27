import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateNestedOneWithoutReceiverInput } from '../notification/notification-create-nested-one-without-receiver.input';

@InputType()
export class UserNotificationCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => NotificationCreateNestedOneWithoutReceiverInput, {nullable:false})
    notif!: NotificationCreateNestedOneWithoutReceiverInput;
}
