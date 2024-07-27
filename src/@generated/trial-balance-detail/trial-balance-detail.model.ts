import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { TrialBalance } from '../trial-balance/trial-balance.model';

@ObjectType()
export class TrialBalanceDetail {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    trialBalanceId!: string;

    @Field(() => String, {nullable:false})
    accountId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isDebit!: boolean;

    @Field(() => Int, {nullable:false})
    openingBalance!: number;

    @Field(() => Int, {nullable:false})
    closingBalance!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => TrialBalance, {nullable:false})
    trialBalance?: TrialBalance;
}
