import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceSumAggregate {

    @Field(() => Int, {nullable:true})
    totalDebit?: number;

    @Field(() => Int, {nullable:true})
    totalCredit?: number;
}
