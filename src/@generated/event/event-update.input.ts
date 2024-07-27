import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumPeriodFieldUpdateOperationsInput } from '../prisma/enum-period-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ParticipantUpdateManyWithoutEventNestedInput } from '../participant/participant-update-many-without-event-nested.input';
import { PositionUpdateManyWithoutEventNestedInput } from '../position/position-update-many-without-event-nested.input';
import { UstadzEventUpdateManyWithoutEventNestedInput } from '../ustadz-event/ustadz-event-update-many-without-event-nested.input';

@InputType()
export class EventUpdateInput {

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

    @Field(() => ParticipantUpdateManyWithoutEventNestedInput, {nullable:true})
    participant?: ParticipantUpdateManyWithoutEventNestedInput;

    @Field(() => PositionUpdateManyWithoutEventNestedInput, {nullable:true})
    crews?: PositionUpdateManyWithoutEventNestedInput;

    @Field(() => UstadzEventUpdateManyWithoutEventNestedInput, {nullable:true})
    speakers?: UstadzEventUpdateManyWithoutEventNestedInput;
}
