import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutImgInput } from './media-create-without-img.input';
import { Type } from 'class-transformer';
import { MediaCreateOrConnectWithoutImgInput } from './media-create-or-connect-without-img.input';
import { MediaUpsertWithoutImgInput } from './media-upsert-without-img.input';
import { MediaWhereInput } from './media-where.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { MediaUpdateToOneWithWhereWithoutImgInput } from './media-update-to-one-with-where-without-img.input';

@InputType()
export class MediaUpdateOneWithoutImgNestedInput {

    @Field(() => MediaCreateWithoutImgInput, {nullable:true})
    @Type(() => MediaCreateWithoutImgInput)
    create?: MediaCreateWithoutImgInput;

    @Field(() => MediaCreateOrConnectWithoutImgInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutImgInput)
    connectOrCreate?: MediaCreateOrConnectWithoutImgInput;

    @Field(() => MediaUpsertWithoutImgInput, {nullable:true})
    @Type(() => MediaUpsertWithoutImgInput)
    upsert?: MediaUpsertWithoutImgInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    disconnect?: MediaWhereInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    delete?: MediaWhereInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaUpdateToOneWithWhereWithoutImgInput, {nullable:true})
    @Type(() => MediaUpdateToOneWithWhereWithoutImgInput)
    update?: MediaUpdateToOneWithWhereWithoutImgInput;
}
