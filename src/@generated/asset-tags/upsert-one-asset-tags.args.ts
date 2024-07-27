import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateInput } from './asset-tags-create.input';
import { AssetTagsUpdateInput } from './asset-tags-update.input';

@ArgsType()
export class UpsertOneAssetTagsArgs {

    @Field(() => AssetTagsWhereUniqueInput, {nullable:false})
    @Type(() => AssetTagsWhereUniqueInput)
    where!: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;

    @Field(() => AssetTagsCreateInput, {nullable:false})
    @Type(() => AssetTagsCreateInput)
    create!: AssetTagsCreateInput;

    @Field(() => AssetTagsUpdateInput, {nullable:false})
    @Type(() => AssetTagsUpdateInput)
    update!: AssetTagsUpdateInput;
}
