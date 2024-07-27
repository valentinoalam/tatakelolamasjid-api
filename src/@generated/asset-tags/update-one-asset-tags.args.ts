import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsUpdateInput } from './asset-tags-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';

@ArgsType()
export class UpdateOneAssetTagsArgs {

    @Field(() => AssetTagsUpdateInput, {nullable:false})
    @Type(() => AssetTagsUpdateInput)
    data!: AssetTagsUpdateInput;

    @Field(() => AssetTagsWhereUniqueInput, {nullable:false})
    @Type(() => AssetTagsWhereUniqueInput)
    where!: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;
}
