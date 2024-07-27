import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';
import { Type } from 'class-transformer';
import { AssetStatusUpdateWithoutAssetInput } from './asset-status-update-without-asset.input';

@InputType()
export class AssetStatusUpdateWithWhereUniqueWithoutAssetInput {

    @Field(() => AssetStatusWhereUniqueInput, {nullable:false})
    @Type(() => AssetStatusWhereUniqueInput)
    where!: Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>;

    @Field(() => AssetStatusUpdateWithoutAssetInput, {nullable:false})
    @Type(() => AssetStatusUpdateWithoutAssetInput)
    data!: AssetStatusUpdateWithoutAssetInput;
}
