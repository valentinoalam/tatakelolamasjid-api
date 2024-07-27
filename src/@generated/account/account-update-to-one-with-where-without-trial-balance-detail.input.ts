import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutTrialBalanceDetailInput } from './account-update-without-trial-balance-detail.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutTrialBalanceDetailInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTrialBalanceDetailInput)
    data!: AccountUpdateWithoutTrialBalanceDetailInput;
}
