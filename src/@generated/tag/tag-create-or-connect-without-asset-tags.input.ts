import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutAssetTagsInput } from './tag-create-without-asset-tags.input';

@InputType()
export class TagCreateOrConnectWithoutAssetTagsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagCreateWithoutAssetTagsInput, {nullable:false})
    @Type(() => TagCreateWithoutAssetTagsInput)
    create!: TagCreateWithoutAssetTagsInput;
}
