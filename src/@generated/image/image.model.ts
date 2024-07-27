import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Media } from '../media/media.model';

@ObjectType()
export class Image {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    mediaId!: string | null;

    @Field(() => String, {nullable:false})
    caption!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Media, {nullable:true})
    container?: Media | null;
}
