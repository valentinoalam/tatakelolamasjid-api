import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusUpdateInput } from './asset-status-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';

@ArgsType()
export class UpdateOneAssetStatusArgs {

    @Field(() => AssetStatusUpdateInput, {nullable:false})
    @Type(() => AssetStatusUpdateInput)
    data!: AssetStatusUpdateInput;

    @Field(() => AssetStatusWhereUniqueInput, {nullable:false})
    @Type(() => AssetStatusWhereUniqueInput)
    where!: Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>;
}
