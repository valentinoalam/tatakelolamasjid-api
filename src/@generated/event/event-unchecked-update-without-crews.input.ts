import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumPeriodFieldUpdateOperationsInput } from '../prisma/enum-period-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ParticipantUncheckedUpdateManyWithoutEventNestedInput } from '../participant/participant-unchecked-update-many-without-event-nested.input';
import { UstadzEventUncheckedUpdateManyWithoutEventNestedInput } from '../ustadz-event/ustadz-event-unchecked-update-many-without-event-nested.input';

@InputType()
export class EventUncheckedUpdateWithoutCrewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    place?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dtStart?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dtEnd?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quota?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPeriodFieldUpdateOperationsInput, {nullable:true})
    heldPeriod?: EnumPeriodFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: StringFieldUpdateOperationsInput;

    @Field(() => ParticipantUncheckedUpdateManyWithoutEventNestedInput, {nullable:true})
    participant?: ParticipantUncheckedUpdateManyWithoutEventNestedInput;

    @Field(() => UstadzEventUncheckedUpdateManyWithoutEventNestedInput, {nullable:true})
    speakers?: UstadzEventUncheckedUpdateManyWithoutEventNestedInput;
}
