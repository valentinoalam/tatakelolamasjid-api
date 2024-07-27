import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumAccountTypeFieldUpdateOperationsInput } from '../prisma/enum-account-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TransactionUncheckedUpdateManyWithoutAccountNestedInput } from '../transaction/transaction-unchecked-update-many-without-account-nested.input';
import { TrialBalanceDetailUncheckedUpdateManyWithoutAccountNestedInput } from '../trial-balance-detail/trial-balance-detail-unchecked-update-many-without-account-nested.input';

@InputType()
export class AccountUncheckedUpdateWithoutChildrenInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bankAccId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentAccountId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAccountTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAccountTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    balance?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    Transaction?: TransactionUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => TrialBalanceDetailUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailUncheckedUpdateManyWithoutAccountNestedInput;
}
