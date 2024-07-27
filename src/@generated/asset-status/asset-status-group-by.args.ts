import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusWhereInput } from './asset-status-where.input';
import { Type } from 'class-transformer';
import { AssetStatusOrderByWithAggregationInput } from './asset-status-order-by-with-aggregation.input';
import { AssetStatusScalarFieldEnum } from './asset-status-scalar-field.enum';
import { AssetStatusScalarWhereWithAggregatesInput } from './asset-status-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssetStatusCountAggregateInput } from './asset-status-count-aggregate.input';
import { AssetStatusAvgAggregateInput } from './asset-status-avg-aggregate.input';
import { AssetStatusSumAggregateInput } from './asset-status-sum-aggregate.input';
import { AssetStatusMinAggregateInput } from './asset-status-min-aggregate.input';
import { AssetStatusMaxAggregateInput } from './asset-status-max-aggregate.input';

@ArgsType()
export class AssetStatusGroupByArgs {

    @Field(() => AssetStatusWhereInput, {nullable:true})
    @Type(() => AssetStatusWhereInput)
    where?: AssetStatusWhereInput;

    @Field(() => [AssetStatusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssetStatusOrderByWithAggregationInput>;

    @Field(() => [AssetStatusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AssetStatusScalarFieldEnum>;

    @Field(() => AssetStatusScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssetStatusScalarWhereWithAggregatesInput;

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
