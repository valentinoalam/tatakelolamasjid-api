import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutAssetTagsInput } from './tag-update-without-asset-tags.input';

@InputType()
export class TagUpdateToOneWithWhereWithoutAssetTagsInput {

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;

    @Field(() => TagUpdateWithoutAssetTagsInput, {nullable:false})
    @Type(() => TagUpdateWithoutAssetTagsInput)
    data!: TagUpdateWithoutAssetTagsInput;
}
