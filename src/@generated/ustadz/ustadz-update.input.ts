import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UstadzEventUpdateManyWithoutUstadzNestedInput } from '../ustadz-event/ustadz-event-update-many-without-ustadz-nested.input';

@InputType()
export class UstadzUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => UstadzEventUpdateManyWithoutUstadzNestedInput, {nullable:true})
    attendAs?: UstadzEventUpdateManyWithoutUstadzNestedInput;
}
