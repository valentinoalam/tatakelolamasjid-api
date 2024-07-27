import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetStatusCreateWithoutAssetInput } from './asset-status-create-without-asset.input';
import { Type } from 'class-transformer';
import { AssetStatusCreateOrConnectWithoutAssetInput } from './asset-status-create-or-connect-without-asset.input';
import { AssetStatusCreateManyAssetInputEnvelope } from './asset-status-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';

@InputType()
export class AssetStatusUncheckedCreateNestedManyWithoutAssetInput {

    @Field(() => [AssetStatusCreateWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusCreateWithoutAssetInput)
    create?: Array<AssetStatusCreateWithoutAssetInput>;

    @Field(() => [AssetStatusCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<AssetStatusCreateOrConnectWithoutAssetInput>;

    @Field(() => AssetStatusCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => AssetStatusCreateManyAssetInputEnvelope)
    createMany?: AssetStatusCreateManyAssetInputEnvelope;

    @Field(() => [AssetStatusWhereUniqueInput], {nullable:true})
    @Type(() => AssetStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>>;
}
