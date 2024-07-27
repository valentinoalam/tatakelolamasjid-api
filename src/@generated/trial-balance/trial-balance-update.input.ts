import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { LedgerUpdateOneRequiredWithoutTrialBalanceNestedInput } from '../ledger/ledger-update-one-required-without-trial-balance-nested.input';
import { TrialBalanceDetailUpdateManyWithoutTrialBalanceNestedInput } from '../trial-balance-detail/trial-balance-detail-update-many-without-trial-balance-nested.input';

@InputType()
export class TrialBalanceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    periodStart?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    periodEnd?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalDebit?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalCredit?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => LedgerUpdateOneRequiredWithoutTrialBalanceNestedInput, {nullable:true})
    ledger?: LedgerUpdateOneRequiredWithoutTrialBalanceNestedInput;

    @Field(() => TrialBalanceDetailUpdateManyWithoutTrialBalanceNestedInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailUpdateManyWithoutTrialBalanceNestedInput;
}
