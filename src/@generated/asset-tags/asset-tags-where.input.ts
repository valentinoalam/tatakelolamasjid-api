import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AssetRelationFilter } from '../asset/asset-relation-filter.input';
import { TagRelationFilter } from '../tag/tag-relation-filter.input';

@InputType()
export class AssetTagsWhereInput {

    @Field(() => [AssetTagsWhereInput], {nullable:true})
    AND?: Array<AssetTagsWhereInput>;

    @Field(() => [AssetTagsWhereInput], {nullable:true})
    OR?: Array<AssetTagsWhereInput>;

    @Field(() => [AssetTagsWhereInput], {nullable:true})
    NOT?: Array<AssetTagsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    assetId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tagId?: StringFilter;

    @Field(() => AssetRelationFilter, {nullable:true})
    asset?: AssetRelationFilter;

    @Field(() => TagRelationFilter, {nullable:true})
    tag?: TagRelationFilter;
}
