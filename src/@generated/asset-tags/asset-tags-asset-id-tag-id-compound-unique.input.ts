import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssetTagsAssetIdTagIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    assetId!: string;

    @Field(() => String, {nullable:false})
    tagId!: string;
}
