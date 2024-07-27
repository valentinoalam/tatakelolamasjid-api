import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumAssetTypesFilter } from '../prisma/enum-asset-types-filter.input';
import { EnumAcquisitionOriginFilter } from '../prisma/enum-acquisition-origin-filter.input';
import { AssetStatusListRelationFilter } from '../asset-status/asset-status-list-relation-filter.input';
import { AssetTagsListRelationFilter } from '../asset-tags/asset-tags-list-relation-filter.input';

@InputType()
export class AssetWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AssetWhereInput], {nullable:true})
    AND?: Array<AssetWhereInput>;

    @Field(() => [AssetWhereInput], {nullable:true})
    OR?: Array<AssetWhereInput>;

    @Field(() => [AssetWhereInput], {nullable:true})
    NOT?: Array<AssetWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date_acquired?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    economicLife?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    qty?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    editedBy?: StringFilter;

    @Field(() => EnumAssetTypesFilter, {nullable:true})
    type?: EnumAssetTypesFilter;

    @Field(() => EnumAcquisitionOriginFilter, {nullable:true})
    origin?: EnumAcquisitionOriginFilter;

    @Field(() => AssetStatusListRelationFilter, {nullable:true})
    AssetStatus?: AssetStatusListRelationFilter;

    @Field(() => AssetTagsListRelationFilter, {nullable:true})
    AssetTags?: AssetTagsListRelationFilter;
}
