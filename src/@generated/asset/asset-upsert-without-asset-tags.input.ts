import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetUpdateWithoutAssetTagsInput } from './asset-update-without-asset-tags.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutAssetTagsInput } from './asset-create-without-asset-tags.input';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetUpsertWithoutAssetTagsInput {

    @Field(() => AssetUpdateWithoutAssetTagsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutAssetTagsInput)
    update!: AssetUpdateWithoutAssetTagsInput;

    @Field(() => AssetCreateWithoutAssetTagsInput, {nullable:false})
    @Type(() => AssetCreateWithoutAssetTagsInput)
    create!: AssetCreateWithoutAssetTagsInput;

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;
}
