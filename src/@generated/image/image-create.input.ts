import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateNestedOneWithoutImgInput } from '../media/media-create-nested-one-without-img.input';

@InputType()
export class ImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    caption!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MediaCreateNestedOneWithoutImgInput, {nullable:true})
    container?: MediaCreateNestedOneWithoutImgInput;
}
