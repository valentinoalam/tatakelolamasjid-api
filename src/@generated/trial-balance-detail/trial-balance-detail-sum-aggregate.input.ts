import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrialBalanceDetailSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    openingBalance?: true;

    @Field(() => Boolean, {nullable:true})
    closingBalance?: true;
}
