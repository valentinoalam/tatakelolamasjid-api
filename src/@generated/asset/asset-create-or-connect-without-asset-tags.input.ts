import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutAssetTagsInput } from './asset-create-without-asset-tags.input';

@InputType()
export class AssetCreateOrConnectWithoutAssetTagsInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;

    @Field(() => AssetCreateWithoutAssetTagsInput, {nullable:false})
    @Type(() => AssetCreateWithoutAssetTagsInput)
    create!: AssetCreateWithoutAssetTagsInput;
}
