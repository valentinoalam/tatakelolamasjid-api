import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BankAccountCountAggregate } from './bank-account-count-aggregate.output';
import { BankAccountMinAggregate } from './bank-account-min-aggregate.output';
import { BankAccountMaxAggregate } from './bank-account-max-aggregate.output';

@ObjectType()
export class BankAccountGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    accountNumber!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BankAccountCountAggregate, {nullable:true})
    _count?: BankAccountCountAggregate;

    @Field(() => BankAccountMinAggregate, {nullable:true})
    _min?: BankAccountMinAggregate;

    @Field(() => BankAccountMaxAggregate, {nullable:true})
    _max?: BankAccountMaxAggregate;
}
