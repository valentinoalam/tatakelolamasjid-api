import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetStatusCreateManyAssetInput } from './asset-status-create-many-asset.input';
import { Type } from 'class-transformer';

@InputType()
export class AssetStatusCreateManyAssetInputEnvelope {

    @Field(() => [AssetStatusCreateManyAssetInput], {nullable:false})
    @Type(() => AssetStatusCreateManyAssetInput)
    data!: Array<AssetStatusCreateManyAssetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
