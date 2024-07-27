import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { Type } from 'class-transformer';
import { AssetTagsUpdateWithoutTagInput } from './asset-tags-update-without-tag.input';

@InputType()
export class AssetTagsUpdateWithWhereUniqueWithoutTagInput {

    @Field(() => AssetTagsWhereUniqueInput, {nullable:false})
    @Type(() => AssetTagsWhereUniqueInput)
    where!: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;

    @Field(() => AssetTagsUpdateWithoutTagInput, {nullable:false})
    @Type(() => AssetTagsUpdateWithoutTagInput)
    data!: AssetTagsUpdateWithoutTagInput;
}
