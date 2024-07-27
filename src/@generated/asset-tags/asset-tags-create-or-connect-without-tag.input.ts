import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateWithoutTagInput } from './asset-tags-create-without-tag.input';

@InputType()
export class AssetTagsCreateOrConnectWithoutTagInput {

    @Field(() => AssetTagsWhereUniqueInput, {nullable:false})
    @Type(() => AssetTagsWhereUniqueInput)
    where!: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;

    @Field(() => AssetTagsCreateWithoutTagInput, {nullable:false})
    @Type(() => AssetTagsCreateWithoutTagInput)
    create!: AssetTagsCreateWithoutTagInput;
}
