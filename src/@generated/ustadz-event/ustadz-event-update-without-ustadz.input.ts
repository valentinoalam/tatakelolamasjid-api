import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EventUpdateOneRequiredWithoutSpeakersNestedInput } from '../event/event-update-one-required-without-speakers-nested.input';

@InputType()
export class UstadzEventUpdateWithoutUstadzInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EventUpdateOneRequiredWithoutSpeakersNestedInput, {nullable:true})
    Event?: EventUpdateOneRequiredWithoutSpeakersNestedInput;
}
