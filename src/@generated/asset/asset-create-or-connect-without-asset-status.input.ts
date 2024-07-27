import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutAssetStatusInput } from './asset-create-without-asset-status.input';

@InputType()
export class AssetCreateOrConnectWithoutAssetStatusInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;

    @Field(() => AssetCreateWithoutAssetStatusInput, {nullable:false})
    @Type(() => AssetCreateWithoutAssetStatusInput)
    create!: AssetCreateWithoutAssetStatusInput;
}
