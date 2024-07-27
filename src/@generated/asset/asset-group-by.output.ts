import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetTypes } from '../prisma/asset-types.enum';
import { AcquisitionOrigin } from '../prisma/acquisition-origin.enum';
import { AssetCountAggregate } from './asset-count-aggregate.output';
import { AssetAvgAggregate } from './asset-avg-aggregate.output';
import { AssetSumAggregate } from './asset-sum-aggregate.output';
import { AssetMinAggregate } from './asset-min-aggregate.output';
import { AssetMaxAggregate } from './asset-max-aggregate.output';

@ObjectType()
export class AssetGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    date_acquired!: Date | string;

    @Field(() => Int, {nullable:false})
    economicLife!: number;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => String, {nullable:false})
    editedBy!: string;

    @Field(() => AssetTypes, {nullable:false})
    type!: keyof typeof AssetTypes;

    @Field(() => AcquisitionOrigin, {nullable:false})
    origin!: keyof typeof AcquisitionOrigin;

    @Field(() => AssetCountAggregate, {nullable:true})
    _count?: AssetCountAggregate;

    @Field(() => AssetAvgAggregate, {nullable:true})
    _avg?: AssetAvgAggregate;

    @Field(() => AssetSumAggregate, {nullable:true})
    _sum?: AssetSumAggregate;

    @Field(() => AssetMinAggregate, {nullable:true})
    _min?: AssetMinAggregate;

    @Field(() => AssetMaxAggregate, {nullable:true})
    _max?: AssetMaxAggregate;
}
