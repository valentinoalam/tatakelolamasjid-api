import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetCreateNestedOneWithoutAssetStatusInput } from '../asset/asset-create-nested-one-without-asset-status.input';

@InputType()
export class AssetStatusCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    availableQty!: number;

    @Field(() => Int, {nullable:false})
    totalQty!: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => String, {nullable:false})
    updatedBy!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssetCreateNestedOneWithoutAssetStatusInput, {nullable:false})
    asset!: AssetCreateNestedOneWithoutAssetStatusInput;
}
