import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutAssetTagsInput } from './asset-create-without-asset-tags.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutAssetTagsInput } from './asset-create-or-connect-without-asset-tags.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';

@InputType()
export class AssetCreateNestedOneWithoutAssetTagsInput {

    @Field(() => AssetCreateWithoutAssetTagsInput, {nullable:true})
    @Type(() => AssetCreateWithoutAssetTagsInput)
    create?: AssetCreateWithoutAssetTagsInput;

    @Field(() => AssetCreateOrConnectWithoutAssetTagsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutAssetTagsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutAssetTagsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;
}
