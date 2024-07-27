import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { PaymentMethodUpdateManyWithoutUserNestedInput } from '../payment-method/payment-method-update-many-without-user-nested.input';
import { MemoUpdateManyWithoutUserNestedInput } from '../memo/memo-update-many-without-user-nested.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { PositionUpdateOneWithoutUserNestedInput } from '../position/position-update-one-without-user-nested.input';
import { ParticipantUpdateManyWithoutUserNestedInput } from '../participant/participant-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutNotificationInput {

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

    @Field(() => PaymentMethodUpdateManyWithoutUserNestedInput, {nullable:true})
    paymentMethod?: PaymentMethodUpdateManyWithoutUserNestedInput;

    @Field(() => MemoUpdateManyWithoutUserNestedInput, {nullable:true})
    memo?: MemoUpdateManyWithoutUserNestedInput;

    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserNestedInput;

    @Field(() => PositionUpdateOneWithoutUserNestedInput, {nullable:true})
    position?: PositionUpdateOneWithoutUserNestedInput;

    @Field(() => ParticipantUpdateManyWithoutUserNestedInput, {nullable:true})
    Participant?: ParticipantUpdateManyWithoutUserNestedInput;
}
