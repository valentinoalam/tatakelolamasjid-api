import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrialBalanceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    ledgerId?: true;

    @Field(() => Boolean, {nullable:true})
    periodStart?: true;

    @Field(() => Boolean, {nullable:true})
    periodEnd?: true;

    @Field(() => Boolean, {nullable:true})
    totalDebit?: true;

    @Field(() => Boolean, {nullable:true})
    totalCredit?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
