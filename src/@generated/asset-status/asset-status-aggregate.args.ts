import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusWhereInput } from './asset-status-where.input';
import { Type } from 'class-transformer';
import { AssetStatusOrderByWithRelationInput } from './asset-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssetStatusWhereUniqueInput } from './asset-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssetStatusCountAggregateInput } from './asset-status-count-aggregate.input';
import { AssetStatusAvgAggregateInput } from './asset-status-avg-aggregate.input';
import { AssetStatusSumAggregateInput } from './asset-status-sum-aggregate.input';
import { AssetStatusMinAggregateInput } from './asset-status-min-aggregate.input';
import { AssetStatusMaxAggregateInput } from './asset-status-max-aggregate.input';

@ArgsType()
export class AssetStatusAggregateArgs {

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

    @Field(() => AssetStatusCountAggregateInput, {nullable:true})
    _count?: AssetStatusCountAggregateInput;

    @Field(() => AssetStatusAvgAggregateInput, {nullable:true})
    _avg?: AssetStatusAvgAggregateInput;

    @Field(() => AssetStatusSumAggregateInput, {nullable:true})
    _sum?: AssetStatusSumAggregateInput;

    @Field(() => AssetStatusMinAggregateInput, {nullable:true})
    _min?: AssetStatusMinAggregateInput;

    @Field(() => AssetStatusMaxAggregateInput, {nullable:true})
    _max?: AssetStatusMaxAggregateInput;
}
