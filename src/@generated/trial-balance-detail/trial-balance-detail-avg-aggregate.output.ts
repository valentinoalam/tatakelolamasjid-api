import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceDetailAvgAggregate {

    @Field(() => Float, {nullable:true})
    openingBalance?: number;

    @Field(() => Float, {nullable:true})
    closingBalance?: number;
}
