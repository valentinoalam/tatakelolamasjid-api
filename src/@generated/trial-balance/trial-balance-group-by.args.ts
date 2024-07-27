import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceOrderByWithAggregationInput } from './trial-balance-order-by-with-aggregation.input';
import { TrialBalanceScalarFieldEnum } from './trial-balance-scalar-field.enum';
import { TrialBalanceScalarWhereWithAggregatesInput } from './trial-balance-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TrialBalanceCountAggregateInput } from './trial-balance-count-aggregate.input';
import { TrialBalanceAvgAggregateInput } from './trial-balance-avg-aggregate.input';
import { TrialBalanceSumAggregateInput } from './trial-balance-sum-aggregate.input';
import { TrialBalanceMinAggregateInput } from './trial-balance-min-aggregate.input';
import { TrialBalanceMaxAggregateInput } from './trial-balance-max-aggregate.input';

@ArgsType()
export class TrialBalanceGroupByArgs {

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    @Type(() => TrialBalanceWhereInput)
    where?: TrialBalanceWhereInput;

    @Field(() => [TrialBalanceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TrialBalanceOrderByWithAggregationInput>;

    @Field(() => [TrialBalanceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TrialBalanceScalarFieldEnum>;

    @Field(() => TrialBalanceScalarWhereWithAggregatesInput, {nullable:true})
    having?: TrialBalanceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrialBalanceCountAggregateInput, {nullable:true})
    _count?: TrialBalanceCountAggregateInput;

    @Field(() => TrialBalanceAvgAggregateInput, {nullable:true})
    _avg?: TrialBalanceAvgAggregateInput;

    @Field(() => TrialBalanceSumAggregateInput, {nullable:true})
    _sum?: TrialBalanceSumAggregateInput;

    @Field(() => TrialBalanceMinAggregateInput, {nullable:true})
    _min?: TrialBalanceMinAggregateInput;

    @Field(() => TrialBalanceMaxAggregateInput, {nullable:true})
    _max?: TrialBalanceMaxAggregateInput;
}
