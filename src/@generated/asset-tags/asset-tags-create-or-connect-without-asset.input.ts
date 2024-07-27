import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateWithoutAssetInput } from './asset-tags-create-without-asset.input';

@InputType()
export class AssetTagsCreateOrConnectWithoutAssetInput {

    @Field(() => AssetTagsWhereUniqueInput, {nullable:false})
    @Type(() => AssetTagsWhereUniqueInput)
    where!: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;

    @Field(() => AssetTagsCreateWithoutAssetInput, {nullable:false})
    @Type(() => AssetTagsCreateWithoutAssetInput)
    create!: AssetTagsCreateWithoutAssetInput;
}
