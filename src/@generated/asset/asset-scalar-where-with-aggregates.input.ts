import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumAssetTypesWithAggregatesFilter } from '../prisma/enum-asset-types-with-aggregates-filter.input';
import { EnumAcquisitionOriginWithAggregatesFilter } from '../prisma/enum-acquisition-origin-with-aggregates-filter.input';

@InputType()
export class AssetScalarWhereWithAggregatesInput {

    @Field(() => [AssetScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AssetScalarWhereWithAggregatesInput>;

    @Field(() => [AssetScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AssetScalarWhereWithAggregatesInput>;

    @Field(() => [AssetScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AssetScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date_acquired?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    economicLife?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    qty?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    createdBy?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    editedBy?: StringWithAggregatesFilter;

    @Field(() => EnumAssetTypesWithAggregatesFilter, {nullable:true})
    type?: EnumAssetTypesWithAggregatesFilter;

    @Field(() => EnumAcquisitionOriginWithAggregatesFilter, {nullable:true})
    origin?: EnumAcquisitionOriginWithAggregatesFilter;
}
