import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutAssetStatusInput } from './asset-create-without-asset-status.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutAssetStatusInput } from './asset-create-or-connect-without-asset-status.input';
import { AssetUpsertWithoutAssetStatusInput } from './asset-upsert-without-asset-status.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { AssetUpdateToOneWithWhereWithoutAssetStatusInput } from './asset-update-to-one-with-where-without-asset-status.input';

@InputType()
export class AssetUpdateOneRequiredWithoutAssetStatusNestedInput {

    @Field(() => AssetCreateWithoutAssetStatusInput, {nullable:true})
    @Type(() => AssetCreateWithoutAssetStatusInput)
    create?: AssetCreateWithoutAssetStatusInput;

    @Field(() => AssetCreateOrConnectWithoutAssetStatusInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutAssetStatusInput)
    connectOrCreate?: AssetCreateOrConnectWithoutAssetStatusInput;

    @Field(() => AssetUpsertWithoutAssetStatusInput, {nullable:true})
    @Type(() => AssetUpsertWithoutAssetStatusInput)
    upsert?: AssetUpsertWithoutAssetStatusInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;

    @Field(() => AssetUpdateToOneWithWhereWithoutAssetStatusInput, {nullable:true})
    @Type(() => AssetUpdateToOneWithWhereWithoutAssetStatusInput)
    update?: AssetUpdateToOneWithWhereWithoutAssetStatusInput;
}
