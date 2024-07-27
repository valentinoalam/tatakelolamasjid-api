import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssetStatusCountAggregate } from './asset-status-count-aggregate.output';
import { AssetStatusAvgAggregate } from './asset-status-avg-aggregate.output';
import { AssetStatusSumAggregate } from './asset-status-sum-aggregate.output';
import { AssetStatusMinAggregate } from './asset-status-min-aggregate.output';
import { AssetStatusMaxAggregate } from './asset-status-max-aggregate.output';

@ObjectType()
export class AggregateAssetStatus {

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
