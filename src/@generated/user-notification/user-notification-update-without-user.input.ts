import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NotificationUpdateOneRequiredWithoutReceiverNestedInput } from '../notification/notification-update-one-required-without-receiver-nested.input';

@InputType()
export class UserNotificationUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NotificationUpdateOneRequiredWithoutReceiverNestedInput, {nullable:true})
    notif?: NotificationUpdateOneRequiredWithoutReceiverNestedInput;
}
