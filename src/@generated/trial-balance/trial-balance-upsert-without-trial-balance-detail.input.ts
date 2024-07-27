import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceUpdateWithoutTrialBalanceDetailInput } from './trial-balance-update-without-trial-balance-detail.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateWithoutTrialBalanceDetailInput } from './trial-balance-create-without-trial-balance-detail.input';
import { TrialBalanceWhereInput } from './trial-balance-where.input';

@InputType()
export class TrialBalanceUpsertWithoutTrialBalanceDetailInput {

    @Field(() => TrialBalanceUpdateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => TrialBalanceUpdateWithoutTrialBalanceDetailInput)
    update!: TrialBalanceUpdateWithoutTrialBalanceDetailInput;

    @Field(() => TrialBalanceCreateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => TrialBalanceCreateWithoutTrialBalanceDetailInput)
    create!: TrialBalanceCreateWithoutTrialBalanceDetailInput;

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    @Type(() => TrialBalanceWhereInput)
    where?: TrialBalanceWhereInput;
}
