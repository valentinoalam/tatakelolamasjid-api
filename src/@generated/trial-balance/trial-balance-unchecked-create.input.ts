import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrialBalanceDetailUncheckedCreateNestedManyWithoutTrialBalanceInput } from '../trial-balance-detail/trial-balance-detail-unchecked-create-nested-many-without-trial-balance.input';

@InputType()
export class TrialBalanceUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    ledgerId!: string;

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

    @Field(() => TrialBalanceDetailUncheckedCreateNestedManyWithoutTrialBalanceInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailUncheckedCreateNestedManyWithoutTrialBalanceInput;
}
