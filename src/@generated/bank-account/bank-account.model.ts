import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { BankAccountCount } from './bank-account-count.output';

@ObjectType()
export class BankAccount {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    accountNumber!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Account], {nullable:true})
    Account?: Array<Account>;

    @Field(() => BankAccountCount, {nullable:false})
    _count?: BankAccountCount;
}
