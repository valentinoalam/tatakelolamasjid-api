import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutContainerInput } from './image-create-without-container.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutContainerInput } from './image-create-or-connect-without-container.input';
import { ImageCreateManyContainerInputEnvelope } from './image-create-many-container-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutContainerInput {

    @Field(() => [ImageCreateWithoutContainerInput], {nullable:true})
    @Type(() => ImageCreateWithoutContainerInput)
    create?: Array<ImageCreateWithoutContainerInput>;

    @Field(() => [ImageCreateOrConnectWithoutContainerInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutContainerInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutContainerInput>;

    @Field(() => ImageCreateManyContainerInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyContainerInputEnvelope)
    createMany?: ImageCreateManyContainerInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
}
