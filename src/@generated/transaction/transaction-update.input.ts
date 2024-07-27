import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AccountUpdateOneRequiredWithoutTransactionNestedInput } from '../account/account-update-one-required-without-transaction-nested.input';
import { VendorUpdateOneRequiredWithoutTransactionNestedInput } from '../vendor/vendor-update-one-required-without-transaction-nested.input';
import { PaymentMethodUpdateOneRequiredWithoutTransactionNestedInput } from '../payment-method/payment-method-update-one-required-without-transaction-nested.input';

@InputType()
export class TransactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTransactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTransactionTypeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reference?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dtTrx?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    notaUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: StringFieldUpdateOperationsInput;

    @Field(() => AccountUpdateOneRequiredWithoutTransactionNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutTransactionNestedInput;

    @Field(() => VendorUpdateOneRequiredWithoutTransactionNestedInput, {nullable:true})
    vendor?: VendorUpdateOneRequiredWithoutTransactionNestedInput;

    @Field(() => PaymentMethodUpdateOneRequiredWithoutTransactionNestedInput, {nullable:true})
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutTransactionNestedInput;
}