import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetStatusCreateWithoutAssetInput } from './asset-status-create-without-asset.input';
import { Type } from 'class-transformer';
import { AssetStatusCreateOrConnectWithoutAssetInput } from './asset-status-create-or-connect-without-asset.input';
import { AssetStatusUpsertWithWhereUniqueWithoutAssetInput } from './asset-status-upsert-with-where-unique-without-asset.input';
import { AssetStatusCreateManyAssetInputEnvelope } from './asset-status-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';
import { AssetStatusUpdateWithWhereUniqueWithoutAssetInput } from './asset-status-update-with-where-unique-without-asset.input';
import { AssetStatusUpdateManyWithWhereWithoutAssetInput } from './asset-status-update-many-with-where-without-asset.input';
import { AssetStatusScalarWhereInput } from './asset-status-scalar-where.input';

@InputType()
export class AssetStatusUpdateManyWithoutAssetNestedInput {

    @Field(() => [AssetStatusCreateWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusCreateWithoutAssetInput)
    create?: Array<AssetStatusCreateWithoutAssetInput>;

    @Field(() => [AssetStatusCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<AssetStatusCreateOrConnectWithoutAssetInput>;

    @Field(() => [AssetStatusUpsertWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusUpsertWithWhereUniqueWithoutAssetInput)
    upsert?: Array<AssetStatusUpsertWithWhereUniqueWithoutAssetInput>;

    @Field(() => AssetStatusCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => AssetStatusCreateManyAssetInputEnvelope)
    createMany?: AssetStatusCreateManyAssetInputEnvelope;

    @Field(() => [AssetStatusWhereUniqueInput], {nullable:true})
    @Type(() => AssetStatusWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>>;

    @Field(() => [AssetStatusWhereUniqueInput], {nullable:true})
    @Type(() => AssetStatusWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>>;

    @Field(() => [AssetStatusWhereUniqueInput], {nullable:true})
    @Type(() => AssetStatusWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>>;

    @Field(() => [AssetStatusWhereUniqueInput], {nullable:true})
    @Type(() => AssetStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>>;

    @Field(() => [AssetStatusUpdateWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusUpdateWithWhereUniqueWithoutAssetInput)
    update?: Array<AssetStatusUpdateWithWhereUniqueWithoutAssetInput>;

    @Field(() => [AssetStatusUpdateManyWithWhereWithoutAssetInput], {nullable:true})
    @Type(() => AssetStatusUpdateManyWithWhereWithoutAssetInput)
    updateMany?: Array<AssetStatusUpdateManyWithWhereWithoutAssetInput>;

    @Field(() => [AssetStatusScalarWhereInput], {nullable:true})
    @Type(() => AssetStatusScalarWhereInput)
    deleteMany?: Array<AssetStatusScalarWhereInput>;
}
