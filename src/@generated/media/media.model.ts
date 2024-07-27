import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { MediaCount } from './media-count.output';

@ObjectType()
export class Media {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [Image], {nullable:true})
    img?: Array<Image>;

    @Field(() => MediaCount, {nullable:false})
    _count?: MediaCount;
}
