import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumPeriodFieldUpdateOperationsInput } from '../prisma/enum-period-field-update-operations.input';
import { EnumWeekDayFieldUpdateOperationsInput } from '../prisma/enum-week-day-field-update-operations.input';

@InputType()
export class LedgerUpdateWithoutTrialBalanceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumPeriodFieldUpdateOperationsInput, {nullable:true})
    reportPeriod?: EnumPeriodFieldUpdateOperationsInput;

    @Field(() => EnumWeekDayFieldUpdateOperationsInput, {nullable:true})
    startWeekDay?: EnumWeekDayFieldUpdateOperationsInput;
}
