import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImageUncheckedUpdateManyWithoutContainerNestedInput } from '../image/image-unchecked-update-many-without-container-nested.input';

@InputType()
export class MediaUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ImageUncheckedUpdateManyWithoutContainerNestedInput, {nullable:true})
    img?: ImageUncheckedUpdateManyWithoutContainerNestedInput;
}
