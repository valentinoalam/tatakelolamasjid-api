import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrialBalanceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalDebit?: true;

    @Field(() => Boolean, {nullable:true})
    totalCredit?: true;
}
