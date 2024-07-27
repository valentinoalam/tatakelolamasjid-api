import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagUpdateWithoutAssetTagsInput } from './tag-update-without-asset-tags.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutAssetTagsInput } from './tag-create-without-asset-tags.input';
import { TagWhereInput } from './tag-where.input';

@InputType()
export class TagUpsertWithoutAssetTagsInput {

    @Field(() => TagUpdateWithoutAssetTagsInput, {nullable:false})
    @Type(() => TagUpdateWithoutAssetTagsInput)
    update!: TagUpdateWithoutAssetTagsInput;

    @Field(() => TagCreateWithoutAssetTagsInput, {nullable:false})
    @Type(() => TagCreateWithoutAssetTagsInput)
    create!: TagCreateWithoutAssetTagsInput;

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;
}
