import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    ledgerId!: number;

    @Field(() => Int, {nullable:false})
    periodStart!: number;

    @Field(() => Int, {nullable:false})
    periodEnd!: number;

    @Field(() => Int, {nullable:false})
    totalDebit!: number;

    @Field(() => Int, {nullable:false})
    totalCredit!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
