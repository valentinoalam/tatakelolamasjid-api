import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AccountUpdateOneRequiredWithoutTrialBalanceDetailNestedInput } from '../account/account-update-one-required-without-trial-balance-detail-nested.input';
import { TrialBalanceUpdateOneRequiredWithoutTrialBalanceDetailNestedInput } from '../trial-balance/trial-balance-update-one-required-without-trial-balance-detail-nested.input';

@InputType()
export class TrialBalanceDetailUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDebit?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    openingBalance?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    closingBalance?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => AccountUpdateOneRequiredWithoutTrialBalanceDetailNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutTrialBalanceDetailNestedInput;

    @Field(() => TrialBalanceUpdateOneRequiredWithoutTrialBalanceDetailNestedInput, {nullable:true})
    trialBalance?: TrialBalanceUpdateOneRequiredWithoutTrialBalanceDetailNestedInput;
}
