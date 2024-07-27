import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusWhereInput } from './asset-status-where.input';
import { Type } from 'class-transformer';
import { AssetStatusOrderByWithRelationInput } from './asset-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssetStatusScalarFieldEnum } from './asset-status-scalar-field.enum';

@ArgsType()
export class FindManyAssetStatusArgs {

    @Field(() => AssetStatusWhereInput, {nullable:true})
    @Type(() => AssetStatusWhereInput)
    where?: AssetStatusWhereInput;

    @Field(() => [AssetStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssetStatusOrderByWithRelationInput>;

    @Field(() => AssetStatusWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssetStatusWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssetStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AssetStatusScalarFieldEnum>;
}
