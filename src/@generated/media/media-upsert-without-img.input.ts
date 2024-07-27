import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaUpdateWithoutImgInput } from './media-update-without-img.input';
import { Type } from 'class-transformer';
import { MediaCreateWithoutImgInput } from './media-create-without-img.input';
import { MediaWhereInput } from './media-where.input';

@InputType()
export class MediaUpsertWithoutImgInput {

    @Field(() => MediaUpdateWithoutImgInput, {nullable:false})
    @Type(() => MediaUpdateWithoutImgInput)
    update!: MediaUpdateWithoutImgInput;

    @Field(() => MediaCreateWithoutImgInput, {nullable:false})
    @Type(() => MediaCreateWithoutImgInput)
    create!: MediaCreateWithoutImgInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;
}
