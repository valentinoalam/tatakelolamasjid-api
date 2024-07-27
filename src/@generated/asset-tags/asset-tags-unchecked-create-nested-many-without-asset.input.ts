import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateWithoutAssetInput } from './asset-tags-create-without-asset.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateOrConnectWithoutAssetInput } from './asset-tags-create-or-connect-without-asset.input';
import { AssetTagsCreateManyAssetInputEnvelope } from './asset-tags-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';

@InputType()
export class AssetTagsUncheckedCreateNestedManyWithoutAssetInput {

    @Field(() => [AssetTagsCreateWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsCreateWithoutAssetInput)
    create?: Array<AssetTagsCreateWithoutAssetInput>;

    @Field(() => [AssetTagsCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => AssetTagsCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<AssetTagsCreateOrConnectWithoutAssetInput>;

    @Field(() => AssetTagsCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => AssetTagsCreateManyAssetInputEnvelope)
    createMany?: AssetTagsCreateManyAssetInputEnvelope;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;
}
