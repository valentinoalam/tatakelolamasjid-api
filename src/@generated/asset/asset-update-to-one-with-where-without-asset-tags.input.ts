import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';
import { Type } from 'class-transformer';
import { AssetUpdateWithoutAssetTagsInput } from './asset-update-without-asset-tags.input';

@InputType()
export class AssetUpdateToOneWithWhereWithoutAssetTagsInput {

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;

    @Field(() => AssetUpdateWithoutAssetTagsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutAssetTagsInput)
    data!: AssetUpdateWithoutAssetTagsInput;
}
