import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUpdateOneRequiredWithoutAssetTagsNestedInput } from '../tag/tag-update-one-required-without-asset-tags-nested.input';

@InputType()
export class AssetTagsUpdateWithoutAssetInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => TagUpdateOneRequiredWithoutAssetTagsNestedInput, {nullable:true})
    tag?: TagUpdateOneRequiredWithoutAssetTagsNestedInput;
}
