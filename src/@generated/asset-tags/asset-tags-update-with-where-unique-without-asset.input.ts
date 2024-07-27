import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { Type } from 'class-transformer';
import { AssetTagsUpdateWithoutAssetInput } from './asset-tags-update-without-asset.input';

@InputType()
export class AssetTagsUpdateWithWhereUniqueWithoutAssetInput {

    @Field(() => AssetTagsWhereUniqueInput, {nullable:false})
    @Type(() => AssetTagsWhereUniqueInput)
    where!: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;

    @Field(() => AssetTagsUpdateWithoutAssetInput, {nullable:false})
    @Type(() => AssetTagsUpdateWithoutAssetInput)
    data!: AssetTagsUpdateWithoutAssetInput;
}
