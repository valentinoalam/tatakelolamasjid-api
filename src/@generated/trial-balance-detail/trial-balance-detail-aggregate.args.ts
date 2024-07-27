import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailWhereInput } from './trial-balance-detail-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailOrderByWithRelationInput } from './trial-balance-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrialBalanceDetailCountAggregateInput } from './trial-balance-detail-count-aggregate.input';
import { TrialBalanceDetailAvgAggregateInput } from './trial-balance-detail-avg-aggregate.input';
import { TrialBalanceDetailSumAggregateInput } from './trial-balance-detail-sum-aggregate.input';
import { TrialBalanceDetailMinAggregateInput } from './trial-balance-detail-min-aggregate.input';
import { TrialBalanceDetailMaxAggregateInput } from './trial-balance-detail-max-aggregate.input';

@ArgsType()
export class TrialBalanceDetailAggregateArgs {

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    @Type(() => TrialBalanceDetailWhereInput)
    where?: TrialBalanceDetailWhereInput;

    @Field(() => [TrialBalanceDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TrialBalanceDetailOrderByWithRelationInput>;

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrialBalanceDetailCountAggregateInput, {nullable:true})
    _count?: TrialBalanceDetailCountAggregateInput;

    @Field(() => TrialBalanceDetailAvgAggregateInput, {nullable:true})
    _avg?: TrialBalanceDetailAvgAggregateInput;

    @Field(() => TrialBalanceDetailSumAggregateInput, {nullable:true})
    _sum?: TrialBalanceDetailSumAggregateInput;

    @Field(() => TrialBalanceDetailMinAggregateInput, {nullable:true})
    _min?: TrialBalanceDetailMinAggregateInput;

    @Field(() => TrialBalanceDetailMaxAggregateInput, {nullable:true})
    _max?: TrialBalanceDetailMaxAggregateInput;
}
