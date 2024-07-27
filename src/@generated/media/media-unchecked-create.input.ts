import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUncheckedCreateNestedManyWithoutContainerInput } from '../image/image-unchecked-create-nested-many-without-container.input';

@InputType()
export class MediaUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ImageUncheckedCreateNestedManyWithoutContainerInput, {nullable:true})
    img?: ImageUncheckedCreateNestedManyWithoutContainerInput;
}
