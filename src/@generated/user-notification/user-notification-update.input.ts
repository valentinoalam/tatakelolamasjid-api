import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutNotificationNestedInput } from '../user/user-update-one-required-without-notification-nested.input';
import { NotificationUpdateOneRequiredWithoutReceiverNestedInput } from '../notification/notification-update-one-required-without-receiver-nested.input';

@InputType()
export class UserNotificationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutNotificationNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput;

    @Field(() => NotificationUpdateOneRequiredWithoutReceiverNestedInput, {nullable:true})
    notif?: NotificationUpdateOneRequiredWithoutReceiverNestedInput;
}
