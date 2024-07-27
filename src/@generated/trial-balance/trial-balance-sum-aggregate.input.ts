import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrialBalanceSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalDebit?: true;

    @Field(() => Boolean, {nullable:true})
    totalCredit?: true;
}
