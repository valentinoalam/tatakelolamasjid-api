import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutImgInput } from './media-create-without-img.input';
import { Type } from 'class-transformer';
import { MediaCreateOrConnectWithoutImgInput } from './media-create-or-connect-without-img.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@InputType()
export class MediaCreateNestedOneWithoutImgInput {

    @Field(() => MediaCreateWithoutImgInput, {nullable:true})
    @Type(() => MediaCreateWithoutImgInput)
    create?: MediaCreateWithoutImgInput;

    @Field(() => MediaCreateOrConnectWithoutImgInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutImgInput)
    connectOrCreate?: MediaCreateOrConnectWithoutImgInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}
