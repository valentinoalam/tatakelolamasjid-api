import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateManyAssetInput } from './asset-tags-create-many-asset.input';
import { Type } from 'class-transformer';

@InputType()
export class AssetTagsCreateManyAssetInputEnvelope {

    @Field(() => [AssetTagsCreateManyAssetInput], {nullable:false})
    @Type(() => AssetTagsCreateManyAssetInput)
    data!: Array<AssetTagsCreateManyAssetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
