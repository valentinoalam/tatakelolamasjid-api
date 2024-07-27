import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutContainerInput } from './image-create-without-container.input';

@InputType()
export class ImageCreateOrConnectWithoutContainerInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;

    @Field(() => ImageCreateWithoutContainerInput, {nullable:false})
    @Type(() => ImageCreateWithoutContainerInput)
    create!: ImageCreateWithoutContainerInput;
}
