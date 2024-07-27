import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetStatusCountAggregate } from './asset-status-count-aggregate.output';
import { AssetStatusAvgAggregate } from './asset-status-avg-aggregate.output';
import { AssetStatusSumAggregate } from './asset-status-sum-aggregate.output';
import { AssetStatusMinAggregate } from './asset-status-min-aggregate.output';
import { AssetStatusMaxAggregate } from './asset-status-max-aggregate.output';

@ObjectType()
export class AssetStatusGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    assetId!: string;

    @Field(() => Int, {nullable:false})
    availableQty!: number;

    @Field(() => Int, {nullable:false})
    totalQty!: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => String, {nullable:false})
    updatedBy!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssetStatusCountAggregate, {nullable:true})
    _count?: AssetStatusCountAggregate;

    @Field(() => AssetStatusAvgAggregate, {nullable:true})
    _avg?: AssetStatusAvgAggregate;

    @Field(() => AssetStatusSumAggregate, {nullable:true})
    _sum?: AssetStatusSumAggregate;

    @Field(() => AssetStatusMinAggregate, {nullable:true})
    _min?: AssetStatusMinAggregate;

    @Field(() => AssetStatusMaxAggregate, {nullable:true})
    _max?: AssetStatusMaxAggregate;
}
