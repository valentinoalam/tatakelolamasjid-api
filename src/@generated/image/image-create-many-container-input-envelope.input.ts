import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyContainerInput } from './image-create-many-container.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateManyContainerInputEnvelope {

    @Field(() => [ImageCreateManyContainerInput], {nullable:false})
    @Type(() => ImageCreateManyContainerInput)
    data!: Array<ImageCreateManyContainerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
