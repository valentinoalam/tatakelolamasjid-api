import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNotificationInput } from '../user/user-create-nested-one-without-notification.input';
import { NotificationCreateNestedOneWithoutReceiverInput } from '../notification/notification-create-nested-one-without-receiver.input';

@InputType()
export class UserNotificationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutNotificationInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNotificationInput;

    @Field(() => NotificationCreateNestedOneWithoutReceiverInput, {nullable:false})
    notif!: NotificationCreateNestedOneWithoutReceiverInput;
}
