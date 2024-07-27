import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ledger } from '../ledger/ledger.model';
import { TrialBalanceDetail } from '../trial-balance-detail/trial-balance-detail.model';
import { TrialBalanceCount } from './trial-balance-count.output';

@ObjectType()
export class TrialBalance {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    ledgerId!: string;

    @Field(() => Date, {nullable:false})
    periodStart!: Date;

    @Field(() => Date, {nullable:false})
    periodEnd!: Date;

    @Field(() => Int, {nullable:false})
    totalDebit!: number;

    @Field(() => Int, {nullable:false})
    totalCredit!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Ledger, {nullable:false})
    ledger?: Ledger;

    @Field(() => [TrialBalanceDetail], {nullable:true})
    TrialBalanceDetail?: Array<TrialBalanceDetail>;

    @Field(() => TrialBalanceCount, {nullable:false})
    _count?: TrialBalanceCount;
}
