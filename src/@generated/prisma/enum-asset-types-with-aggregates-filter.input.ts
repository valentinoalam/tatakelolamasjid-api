import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTypes } from './asset-types.enum';
import { NestedEnumAssetTypesWithAggregatesFilter } from './nested-enum-asset-types-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAssetTypesFilter } from './nested-enum-asset-types-filter.input';

@InputType()
export class EnumAssetTypesWithAggregatesFilter {

    @Field(() => AssetTypes, {nullable:true})
    equals?: keyof typeof AssetTypes;

    @Field(() => [AssetTypes], {nullable:true})
    in?: Array<keyof typeof AssetTypes>;

    @Field(() => [AssetTypes], {nullable:true})
    notIn?: Array<keyof typeof AssetTypes>;

    @Field(() => NestedEnumAssetTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAssetTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAssetTypesFilter, {nullable:true})
    _min?: NestedEnumAssetTypesFilter;

    @Field(() => NestedEnumAssetTypesFilter, {nullable:true})
    _max?: NestedEnumAssetTypesFilter;
}
