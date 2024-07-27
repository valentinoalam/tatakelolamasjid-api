import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrialBalanceCreateNestedOneWithoutTrialBalanceDetailInput } from '../trial-balance/trial-balance-create-nested-one-without-trial-balance-detail.input';

@InputType()
export class TrialBalanceDetailCreateWithoutAccountInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isDebit?: boolean;

    @Field(() => Int, {nullable:false})
    openingBalance!: number;

    @Field(() => Int, {nullable:false})
    closingBalance!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrialBalanceCreateNestedOneWithoutTrialBalanceDetailInput, {nullable:false})
    trialBalance!: TrialBalanceCreateNestedOneWithoutTrialBalanceDetailInput;
}
