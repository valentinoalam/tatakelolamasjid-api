import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UserNotificationUncheckedUpdateManyWithoutUserNestedInput } from '../user-notification/user-notification-unchecked-update-many-without-user-nested.input';
import { PaymentMethodUncheckedUpdateManyWithoutUserNestedInput } from '../payment-method/payment-method-unchecked-update-many-without-user-nested.input';
import { MemoUncheckedUpdateManyWithoutUserNestedInput } from '../memo/memo-unchecked-update-many-without-user-nested.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { ParticipantUncheckedUpdateManyWithoutUserNestedInput } from '../participant/participant-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPositionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emailAddress?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    api_token?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => UserNotificationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    notification?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PaymentMethodUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    paymentMethod?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MemoUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    memo?: MemoUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => ParticipantUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Participant?: ParticipantUncheckedUpdateManyWithoutUserNestedInput;
}
