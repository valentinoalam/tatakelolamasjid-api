import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';
import { MediaUpdateWithoutImgInput } from './media-update-without-img.input';

@InputType()
export class MediaUpdateToOneWithWhereWithoutImgInput {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;

    @Field(() => MediaUpdateWithoutImgInput, {nullable:false})
    @Type(() => MediaUpdateWithoutImgInput)
    data!: MediaUpdateWithoutImgInput;
}
