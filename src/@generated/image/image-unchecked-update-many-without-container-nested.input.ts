import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutContainerInput } from './image-create-without-container.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutContainerInput } from './image-create-or-connect-without-container.input';
import { ImageUpsertWithWhereUniqueWithoutContainerInput } from './image-upsert-with-where-unique-without-container.input';
import { ImageCreateManyContainerInputEnvelope } from './image-create-many-container-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutContainerInput } from './image-update-with-where-unique-without-container.input';
import { ImageUpdateManyWithWhereWithoutContainerInput } from './image-update-many-with-where-without-container.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUncheckedUpdateManyWithoutContainerNestedInput {

    @Field(() => [ImageCreateWithoutContainerInput], {nullable:true})
    @Type(() => ImageCreateWithoutContainerInput)
    create?: Array<ImageCreateWithoutContainerInput>;

    @Field(() => [ImageCreateOrConnectWithoutContainerInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutContainerInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutContainerInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutContainerInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutContainerInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutContainerInput>;

    @Field(() => ImageCreateManyContainerInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyContainerInputEnvelope)
    createMany?: ImageCreateManyContainerInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutContainerInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutContainerInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutContainerInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutContainerInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutContainerInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutContainerInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}
