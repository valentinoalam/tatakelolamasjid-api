import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceDetailSumAggregate {

    @Field(() => Int, {nullable:true})
    openingBalance?: number;

    @Field(() => Int, {nullable:true})
    closingBalance?: number;
}
