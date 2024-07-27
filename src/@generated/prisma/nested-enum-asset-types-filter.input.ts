import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTypes } from './asset-types.enum';

@InputType()
export class NestedEnumAssetTypesFilter {

    @Field(() => AssetTypes, {nullable:true})
    equals?: keyof typeof AssetTypes;

    @Field(() => [AssetTypes], {nullable:true})
    in?: Array<keyof typeof AssetTypes>;

    @Field(() => [AssetTypes], {nullable:true})
    notIn?: Array<keyof typeof AssetTypes>;

    @Field(() => NestedEnumAssetTypesFilter, {nullable:true})
    not?: NestedEnumAssetTypesFilter;
}
