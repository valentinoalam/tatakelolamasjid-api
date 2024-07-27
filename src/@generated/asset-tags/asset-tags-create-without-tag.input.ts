import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateNestedOneWithoutAssetTagsInput } from '../asset/asset-create-nested-one-without-asset-tags.input';

@InputType()
export class AssetTagsCreateWithoutTagInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AssetCreateNestedOneWithoutAssetTagsInput, {nullable:false})
    asset!: AssetCreateNestedOneWithoutAssetTagsInput;
}
