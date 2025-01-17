import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceDetailCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    trialBalanceId!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Int, {nullable:false})
    isDebit!: number;

    @Field(() => Int, {nullable:false})
    openingBalance!: number;

    @Field(() => Int, {nullable:false})
    closingBalance!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
