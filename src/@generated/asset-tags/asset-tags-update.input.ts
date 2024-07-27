import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AssetUpdateOneRequiredWithoutAssetTagsNestedInput } from '../asset/asset-update-one-required-without-asset-tags-nested.input';
import { TagUpdateOneRequiredWithoutAssetTagsNestedInput } from '../tag/tag-update-one-required-without-asset-tags-nested.input';

@InputType()
export class AssetTagsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => AssetUpdateOneRequiredWithoutAssetTagsNestedInput, {nullable:true})
    asset?: AssetUpdateOneRequiredWithoutAssetTagsNestedInput;

    @Field(() => TagUpdateOneRequiredWithoutAssetTagsNestedInput, {nullable:true})
    tag?: TagUpdateOneRequiredWithoutAssetTagsNestedInput;
}
