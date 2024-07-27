import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetUpdateWithoutAssetStatusInput } from './asset-update-without-asset-status.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutAssetStatusInput } from './asset-create-without-asset-status.input';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetUpsertWithoutAssetStatusInput {

    @Field(() => AssetUpdateWithoutAssetStatusInput, {nullable:false})
    @Type(() => AssetUpdateWithoutAssetStatusInput)
    update!: AssetUpdateWithoutAssetStatusInput;

    @Field(() => AssetCreateWithoutAssetStatusInput, {nullable:false})
    @Type(() => AssetCreateWithoutAssetStatusInput)
    create!: AssetCreateWithoutAssetStatusInput;

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;
}
