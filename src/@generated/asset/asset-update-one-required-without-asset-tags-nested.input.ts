import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutAssetTagsInput } from './asset-create-without-asset-tags.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutAssetTagsInput } from './asset-create-or-connect-without-asset-tags.input';
import { AssetUpsertWithoutAssetTagsInput } from './asset-upsert-without-asset-tags.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { AssetUpdateToOneWithWhereWithoutAssetTagsInput } from './asset-update-to-one-with-where-without-asset-tags.input';

@InputType()
export class AssetUpdateOneRequiredWithoutAssetTagsNestedInput {

    @Field(() => AssetCreateWithoutAssetTagsInput, {nullable:true})
    @Type(() => AssetCreateWithoutAssetTagsInput)
    create?: AssetCreateWithoutAssetTagsInput;

    @Field(() => AssetCreateOrConnectWithoutAssetTagsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutAssetTagsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutAssetTagsInput;

    @Field(() => AssetUpsertWithoutAssetTagsInput, {nullable:true})
    @Type(() => AssetUpsertWithoutAssetTagsInput)
    upsert?: AssetUpsertWithoutAssetTagsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;

    @Field(() => AssetUpdateToOneWithWhereWithoutAssetTagsInput, {nullable:true})
    @Type(() => AssetUpdateToOneWithWhereWithoutAssetTagsInput)
    update?: AssetUpdateToOneWithWhereWithoutAssetTagsInput;
}
