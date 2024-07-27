import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceUpdateWithoutTrialBalanceDetailInput } from './trial-balance-update-without-trial-balance-detail.input';

@InputType()
export class TrialBalanceUpdateToOneWithWhereWithoutTrialBalanceDetailInput {

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    @Type(() => TrialBalanceWhereInput)
    where?: TrialBalanceWhereInput;

    @Field(() => TrialBalanceUpdateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => TrialBalanceUpdateWithoutTrialBalanceDetailInput)
    data!: TrialBalanceUpdateWithoutTrialBalanceDetailInput;
}
