import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumNotificationStatusFieldUpdateOperationsInput } from '../prisma/enum-notification-status-field-update-operations.input';
import { UserNotificationUncheckedUpdateManyWithoutNotifNestedInput } from '../user-notification/user-notification-unchecked-update-many-without-notif-nested.input';

@InputType()
export class NotificationUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    photoUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dtCreated?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isReaded?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    sentAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumNotificationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumNotificationStatusFieldUpdateOperationsInput;

    @Field(() => UserNotificationUncheckedUpdateManyWithoutNotifNestedInput, {nullable:true})
    receiver?: UserNotificationUncheckedUpdateManyWithoutNotifNestedInput;
}
