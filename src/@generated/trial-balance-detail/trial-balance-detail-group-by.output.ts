import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrialBalanceDetailCountAggregate } from './trial-balance-detail-count-aggregate.output';
import { TrialBalanceDetailAvgAggregate } from './trial-balance-detail-avg-aggregate.output';
import { TrialBalanceDetailSumAggregate } from './trial-balance-detail-sum-aggregate.output';
import { TrialBalanceDetailMinAggregate } from './trial-balance-detail-min-aggregate.output';
import { TrialBalanceDetailMaxAggregate } from './trial-balance-detail-max-aggregate.output';

@ObjectType()
export class TrialBalanceDetailGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    trialBalanceId!: string;

    @Field(() => String, {nullable:false})
    accountId!: string;

    @Field(() => Boolean, {nullable:false})
    isDebit!: boolean;

    @Field(() => Int, {nullable:false})
    openingBalance!: number;

    @Field(() => Int, {nullable:false})
    closingBalance!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrialBalanceDetailCountAggregate, {nullable:true})
    _count?: TrialBalanceDetailCountAggregate;

    @Field(() => TrialBalanceDetailAvgAggregate, {nullable:true})
    _avg?: TrialBalanceDetailAvgAggregate;

    @Field(() => TrialBalanceDetailSumAggregate, {nullable:true})
    _sum?: TrialBalanceDetailSumAggregate;

    @Field(() => TrialBalanceDetailMinAggregate, {nullable:true})
    _min?: TrialBalanceDetailMinAggregate;

    @Field(() => TrialBalanceDetailMaxAggregate, {nullable:true})
    _max?: TrialBalanceDetailMaxAggregate;
}
