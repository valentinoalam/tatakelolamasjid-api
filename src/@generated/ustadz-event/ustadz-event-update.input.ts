import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UstadzUpdateOneRequiredWithoutAttendAsNestedInput } from '../ustadz/ustadz-update-one-required-without-attend-as-nested.input';
import { EventUpdateOneRequiredWithoutSpeakersNestedInput } from '../event/event-update-one-required-without-speakers-nested.input';

@InputType()
export class UstadzEventUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UstadzUpdateOneRequiredWithoutAttendAsNestedInput, {nullable:true})
    Ustadz?: UstadzUpdateOneRequiredWithoutAttendAsNestedInput;

    @Field(() => EventUpdateOneRequiredWithoutSpeakersNestedInput, {nullable:true})
    Event?: EventUpdateOneRequiredWithoutSpeakersNestedInput;
}
