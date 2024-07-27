import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateWithoutAssetInput } from './asset-tags-create-without-asset.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateOrConnectWithoutAssetInput } from './asset-tags-create-or-connect-without-asset.input';
import { AssetTagsUpsertWithWhereUniqueWithoutAssetInput } from './asset-tags-upsert-with-where-unique-without-asset.input';
import { AssetTagsCreateManyAssetInputEnvelope } from './asset-tags-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { AssetTagsUpdateWithWhereUniqueWithoutAssetInput } from './asset-tags-update-with-where-unique-without-asset.input';
import { AssetTagsUpdateManyWithWhereWithoutAssetInput } from './asset-tags-update-many-with-where-without-asset.input';
import { AssetTagsScalarWhereInput } from './asset-tags-scalar-where.input';

@InputType()
export class AssetTagsUpdateManyWithoutAssetNestedInput {

    @Field(() => [AssetTagsCreateWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsCreateWithoutAssetInput)
    create?: Array<AssetTagsCreateWithoutAssetInput>;

    @Field(() => [AssetTagsCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<AssetTagsCreateOrConnectWithoutAssetInput>;

    @Field(() => [AssetTagsUpsertWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsUpsertWithWhereUniqueWithoutAssetInput)
    upsert?: Array<AssetTagsUpsertWithWhereUniqueWithoutAssetInput>;

    @Field(() => AssetTagsCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => AssetTagsCreateManyAssetInputEnvelope)
    createMany?: AssetTagsCreateManyAssetInputEnvelope;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsUpdateWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsUpdateWithWhereUniqueWithoutAssetInput)
    update?: Array<AssetTagsUpdateWithWhereUniqueWithoutAssetInput>;

    @Field(() => [AssetTagsUpdateManyWithWhereWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsUpdateManyWithWhereWithoutAssetInput)
    updateMany?: Array<AssetTagsUpdateManyWithWhereWithoutAssetInput>;

    @Field(() => [AssetTagsScalarWhereInput], {nullable:true})
    @Type(() => AssetTagsScalarWhereInput)
    deleteMany?: Array<AssetTagsScalarWhereInput>;
}
