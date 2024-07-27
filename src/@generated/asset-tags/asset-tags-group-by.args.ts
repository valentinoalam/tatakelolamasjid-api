import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsWhereInput } from './asset-tags-where.input';
import { Type } from 'class-transformer';
import { AssetTagsOrderByWithAggregationInput } from './asset-tags-order-by-with-aggregation.input';
import { AssetTagsScalarFieldEnum } from './asset-tags-scalar-field.enum';
import { AssetTagsScalarWhereWithAggregatesInput } from './asset-tags-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssetTagsCountAggregateInput } from './asset-tags-count-aggregate.input';
import { AssetTagsMinAggregateInput } from './asset-tags-min-aggregate.input';
import { AssetTagsMaxAggregateInput } from './asset-tags-max-aggregate.input';

@ArgsType()
export class AssetTagsGroupByArgs {

    @Field(() => AssetTagsWhereInput, {nullable:true})
    @Type(() => AssetTagsWhereInput)
    where?: AssetTagsWhereInput;

    @Field(() => [AssetTagsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssetTagsOrderByWithAggregationInput>;

    @Field(() => [AssetTagsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AssetTagsScalarFieldEnum>;

    @Field(() => AssetTagsScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssetTagsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssetTagsCountAggregateInput, {nullable:true})
    _count?: AssetTagsCountAggregateInput;

    @Field(() => AssetTagsMinAggregateInput, {nullable:true})
    _min?: AssetTagsMinAggregateInput;

    @Field(() => AssetTagsMaxAggregateInput, {nullable:true})
    _max?: AssetTagsMaxAggregateInput;
}
