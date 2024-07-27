import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Int } from '@nestjs/graphql';
import { BankAccount } from '../bank-account/bank-account.model';
import { Transaction } from '../transaction/transaction.model';
import { TrialBalanceDetail } from '../trial-balance-detail/trial-balance-detail.model';
import { AccountCount } from './account-count.output';

@ObjectType()
export class Account {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    bankAccId!: string;

    @Field(() => String, {nullable:true})
    parentAccountId!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AccountType, {nullable:false})
    type!: keyof typeof AccountType;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    balance!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => BankAccount, {nullable:true})
    bankAcc?: BankAccount | null;

    @Field(() => Account, {nullable:true})
    parent?: Account | null;

    @Field(() => [Account], {nullable:true})
    children?: Array<Account>;

    @Field(() => [Transaction], {nullable:true})
    Transaction?: Array<Transaction>;

    @Field(() => [TrialBalanceDetail], {nullable:true})
    TrialBalanceDetail?: Array<TrialBalanceDetail>;

    @Field(() => AccountCount, {nullable:false})
    _count?: AccountCount;
}
