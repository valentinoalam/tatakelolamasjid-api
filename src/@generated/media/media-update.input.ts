import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImageUpdateManyWithoutContainerNestedInput } from '../image/image-update-many-without-container-nested.input';

@InputType()
export class MediaUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ImageUpdateManyWithoutContainerNestedInput, {nullable:true})
    img?: ImageUpdateManyWithoutContainerNestedInput;
}
