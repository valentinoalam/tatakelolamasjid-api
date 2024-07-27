import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceAvgAggregate {

    @Field(() => Float, {nullable:true})
    totalDebit?: number;

    @Field(() => Float, {nullable:true})
    totalCredit?: number;
}
