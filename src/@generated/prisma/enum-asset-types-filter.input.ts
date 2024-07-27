import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTypes } from './asset-types.enum';
import { NestedEnumAssetTypesFilter } from './nested-enum-asset-types-filter.input';

@InputType()
export class EnumAssetTypesFilter {

    @Field(() => AssetTypes, {nullable:true})
    equals?: keyof typeof AssetTypes;

    @Field(() => [AssetTypes], {nullable:true})
    in?: Array<keyof typeof AssetTypes>;

    @Field(() => [AssetTypes], {nullable:true})
    notIn?: Array<keyof typeof AssetTypes>;

    @Field(() => NestedEnumAssetTypesFilter, {nullable:true})
    not?: NestedEnumAssetTypesFilter;
}
