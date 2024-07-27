import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutContainerInput } from '../image/image-create-nested-many-without-container.input';

@InputType()
export class MediaCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ImageCreateNestedManyWithoutContainerInput, {nullable:true})
    img?: ImageCreateNestedManyWithoutContainerInput;
}
