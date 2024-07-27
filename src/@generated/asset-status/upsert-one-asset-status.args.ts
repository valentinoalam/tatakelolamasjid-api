import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';
import { Type } from 'class-transformer';
import { AssetStatusCreateInput } from './asset-status-create.input';
import { AssetStatusUpdateInput } from './asset-status-update.input';

@ArgsType()
export class UpsertOneAssetStatusArgs {

    @Field(() => AssetStatusWhereUniqueInput, {nullable:false})
    @Type(() => AssetStatusWhereUniqueInput)
    where!: Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>;

    @Field(() => AssetStatusCreateInput, {nullable:false})
    @Type(() => AssetStatusCreateInput)
    create!: AssetStatusCreateInput;

    @Field(() => AssetStatusUpdateInput, {nullable:false})
    @Type(() => AssetStatusUpdateInput)
    update!: AssetStatusUpdateInput;
}
