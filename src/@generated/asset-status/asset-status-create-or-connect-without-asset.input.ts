import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';
import { Type } from 'class-transformer';
import { AssetStatusCreateWithoutAssetInput } from './asset-status-create-without-asset.input';

@InputType()
export class AssetStatusCreateOrConnectWithoutAssetInput {

    @Field(() => AssetStatusWhereUniqueInput, {nullable:false})
    @Type(() => AssetStatusWhereUniqueInput)
    where!: Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>;

    @Field(() => AssetStatusCreateWithoutAssetInput, {nullable:false})
    @Type(() => AssetStatusCreateWithoutAssetInput)
    create!: AssetStatusCreateWithoutAssetInput;
}
