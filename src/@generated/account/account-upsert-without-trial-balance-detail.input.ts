import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutTrialBalanceDetailInput } from './account-update-without-trial-balance-detail.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutTrialBalanceDetailInput } from './account-create-without-trial-balance-detail.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutTrialBalanceDetailInput {

    @Field(() => AccountUpdateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTrialBalanceDetailInput)
    update!: AccountUpdateWithoutTrialBalanceDetailInput;

    @Field(() => AccountCreateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => AccountCreateWithoutTrialBalanceDetailInput)
    create!: AccountCreateWithoutTrialBalanceDetailInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
