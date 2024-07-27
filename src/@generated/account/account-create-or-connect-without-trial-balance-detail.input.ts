import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutTrialBalanceDetailInput } from './account-create-without-trial-balance-detail.input';

@InputType()
export class AccountCreateOrConnectWithoutTrialBalanceDetailInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => AccountCreateWithoutTrialBalanceDetailInput)
    create!: AccountCreateWithoutTrialBalanceDetailInput;
}
