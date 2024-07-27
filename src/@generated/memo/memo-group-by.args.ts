import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoWhereInput } from './memo-where.input';
import { Type } from 'class-transformer';
import { MemoOrderByWithAggregationInput } from './memo-order-by-with-aggregation.input';
import { MemoScalarFieldEnum } from './memo-scalar-field.enum';
import { MemoScalarWhereWithAggregatesInput } from './memo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MemoCountAggregateInput } from './memo-count-aggregate.input';
import { MemoMinAggregateInput } from './memo-min-aggregate.input';
import { MemoMaxAggregateInput } from './memo-max-aggregate.input';

@ArgsType()
export class MemoGroupByArgs {

    @Field(() => MemoWhereInput, {nullable:true})
    @Type(() => MemoWhereInput)
    where?: MemoWhereInput;

    @Field(() => [MemoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MemoOrderByWithAggregationInput>;

    @Field(() => [MemoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MemoScalarFieldEnum>;

    @Field(() => MemoScalarWhereWithAggregatesInput, {nullable:true})
    having?: MemoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemoCountAggregateInput, {nullable:true})
    _count?: MemoCountAggregateInput;

    @Field(() => MemoMinAggregateInput, {nullable:true})
    _min?: MemoMinAggregateInput;

    @Field(() => MemoMaxAggregateInput, {nullable:true})
    _max?: MemoMaxAggregateInput;
}
