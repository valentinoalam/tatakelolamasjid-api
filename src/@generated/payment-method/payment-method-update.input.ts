import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPaymentMethodNestedInput } from '../user/user-update-one-required-without-payment-method-nested.input';
import { TransactionUpdateManyWithoutPaymentMethodNestedInput } from '../transaction/transaction-update-many-without-payment-method-nested.input';

@InputType()
export class PaymentMethodUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    jenis_pembayaran?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPaymentMethodNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPaymentMethodNestedInput;

    @Field(() => TransactionUpdateManyWithoutPaymentMethodNestedInput, {nullable:true})
    Transaction?: TransactionUpdateManyWithoutPaymentMethodNestedInput;
}
