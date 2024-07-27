import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsAssetIdTagIdCompoundUniqueInput } from './asset-tags-asset-id-tag-id-compound-unique.input';
import { AssetTagsWhereInput } from './asset-tags-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AssetRelationFilter } from '../asset/asset-relation-filter.input';
import { TagRelationFilter } from '../tag/tag-relation-filter.input';

@InputType()
export class AssetTagsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AssetTagsAssetIdTagIdCompoundUniqueInput, {nullable:true})
    assetId_tagId?: AssetTagsAssetIdTagIdCompoundUniqueInput;

    @Field(() => [AssetTagsWhereInput], {nullable:true})
    AND?: Array<AssetTagsWhereInput>;

    @Field(() => [AssetTagsWhereInput], {nullable:true})
    OR?: Array<AssetTagsWhereInput>;

    @Field(() => [AssetTagsWhereInput], {nullable:true})
    NOT?: Array<AssetTagsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    assetId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tagId?: StringFilter;

    @Field(() => AssetRelationFilter, {nullable:true})
    asset?: AssetRelationFilter;

    @Field(() => TagRelationFilter, {nullable:true})
    tag?: TagRelationFilter;
}
