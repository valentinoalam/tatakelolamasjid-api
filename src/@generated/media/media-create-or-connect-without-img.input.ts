import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Type } from 'class-transformer';
import { MediaCreateWithoutImgInput } from './media-create-without-img.input';

@InputType()
export class MediaCreateOrConnectWithoutImgInput {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaCreateWithoutImgInput, {nullable:false})
    @Type(() => MediaCreateWithoutImgInput)
    create!: MediaCreateWithoutImgInput;
}
