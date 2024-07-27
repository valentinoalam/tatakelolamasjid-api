import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAccountTypeFieldUpdateOperationsInput } from '../prisma/enum-account-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BankAccountUpdateOneWithoutAccountNestedInput } from '../bank-account/bank-account-update-one-without-account-nested.input';
import { AccountUpdateOneWithoutChildrenNestedInput } from './account-update-one-without-children-nested.input';
import { AccountUpdateManyWithoutParentNestedInput } from './account-update-many-without-parent-nested.input';
import { TransactionUpdateManyWithoutAccountNestedInput } from '../transaction/transaction-update-many-without-account-nested.input';

@InputType()
export class AccountUpdateWithoutTrialBalanceDetailInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => BankAccountUpdateOneWithoutAccountNestedInput, {nullable:true})
    bankAcc?: BankAccountUpdateOneWithoutAccountNestedInput;

    @Field(() => AccountUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: AccountUpdateOneWithoutChildrenNestedInput;

    @Field(() => AccountUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: AccountUpdateManyWithoutParentNestedInput;

    @Field(() => TransactionUpdateManyWithoutAccountNestedInput, {nullable:true})
    Transaction?: TransactionUpdateManyWithoutAccountNestedInput;
}
