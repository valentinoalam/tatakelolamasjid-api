import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrialBalanceCountAggregate } from './trial-balance-count-aggregate.output';
import { TrialBalanceAvgAggregate } from './trial-balance-avg-aggregate.output';
import { TrialBalanceSumAggregate } from './trial-balance-sum-aggregate.output';
import { TrialBalanceMinAggregate } from './trial-balance-min-aggregate.output';
import { TrialBalanceMaxAggregate } from './trial-balance-max-aggregate.output';

@ObjectType()
export class TrialBalanceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    ledgerId!: string;

    @Field(() => Date, {nullable:false})
    periodStart!: Date | string;

    @Field(() => Date, {nullable:false})
    periodEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    totalDebit!: number;

    @Field(() => Int, {nullable:false})
    totalCredit!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrialBalanceCountAggregate, {nullable:true})
    _count?: TrialBalanceCountAggregate;

    @Field(() => TrialBalanceAvgAggregate, {nullable:true})
    _avg?: TrialBalanceAvgAggregate;

    @Field(() => TrialBalanceSumAggregate, {nullable:true})
    _sum?: TrialBalanceSumAggregate;

    @Field(() => TrialBalanceMinAggregate, {nullable:true})
    _min?: TrialBalanceMinAggregate;

    @Field(() => TrialBalanceMaxAggregate, {nullable:true})
    _max?: TrialBalanceMaxAggregate;
}
