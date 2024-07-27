import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AssetTagsScalarWhereWithAggregatesInput {

    @Field(() => [AssetTagsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AssetTagsScalarWhereWithAggregatesInput>;

    @Field(() => [AssetTagsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AssetTagsScalarWhereWithAggregatesInput>;

    @Field(() => [AssetTagsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AssetTagsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assetId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tagId?: StringWithAggregatesFilter;
}
