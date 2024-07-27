import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrialBalanceDetailCreateNestedManyWithoutTrialBalanceInput } from '../trial-balance-detail/trial-balance-detail-create-nested-many-without-trial-balance.input';

@InputType()
export class TrialBalanceCreateWithoutLedgerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    periodStart!: Date | string;

    @Field(() => Date, {nullable:false})
    periodEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    totalDebit!: number;

    @Field(() => Int, {nullable:false})
    totalCredit!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrialBalanceDetailCreateNestedManyWithoutTrialBalanceInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailCreateNestedManyWithoutTrialBalanceInput;
}
