import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';
import { Type } from 'class-transformer';
import { AssetUpdateWithoutAssetStatusInput } from './asset-update-without-asset-status.input';

@InputType()
export class AssetUpdateToOneWithWhereWithoutAssetStatusInput {

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;

    @Field(() => AssetUpdateWithoutAssetStatusInput, {nullable:false})
    @Type(() => AssetUpdateWithoutAssetStatusInput)
    data!: AssetUpdateWithoutAssetStatusInput;
}
