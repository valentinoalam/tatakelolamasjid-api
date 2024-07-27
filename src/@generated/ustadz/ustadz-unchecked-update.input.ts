import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UstadzEventUncheckedUpdateManyWithoutUstadzNestedInput } from '../ustadz-event/ustadz-event-unchecked-update-many-without-ustadz-nested.input';

@InputType()
export class UstadzUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => UstadzEventUncheckedUpdateManyWithoutUstadzNestedInput, {nullable:true})
    attendAs?: UstadzEventUncheckedUpdateManyWithoutUstadzNestedInput;
}
