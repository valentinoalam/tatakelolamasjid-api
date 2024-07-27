import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateNestedOneWithoutAssetTagsInput } from '../asset/asset-create-nested-one-without-asset-tags.input';
import { TagCreateNestedOneWithoutAssetTagsInput } from '../tag/tag-create-nested-one-without-asset-tags.input';

@InputType()
export class AssetTagsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AssetCreateNestedOneWithoutAssetTagsInput, {nullable:false})
    asset!: AssetCreateNestedOneWithoutAssetTagsInput;

    @Field(() => TagCreateNestedOneWithoutAssetTagsInput, {nullable:false})
    tag!: TagCreateNestedOneWithoutAssetTagsInput;
}
