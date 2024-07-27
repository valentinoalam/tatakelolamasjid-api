import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateNestedOneWithoutAssetTagsInput } from '../tag/tag-create-nested-one-without-asset-tags.input';

@InputType()
export class AssetTagsCreateWithoutAssetInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TagCreateNestedOneWithoutAssetTagsInput, {nullable:false})
    tag!: TagCreateNestedOneWithoutAssetTagsInput;
}
