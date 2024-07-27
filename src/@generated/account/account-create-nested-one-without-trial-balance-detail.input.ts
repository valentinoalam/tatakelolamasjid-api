import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTrialBalanceDetailInput } from './account-create-without-trial-balance-detail.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTrialBalanceDetailInput } from './account-create-or-connect-without-trial-balance-detail.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutTrialBalanceDetailInput {

    @Field(() => AccountCreateWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => AccountCreateWithoutTrialBalanceDetailInput)
    create?: AccountCreateWithoutTrialBalanceDetailInput;

    @Field(() => AccountCreateOrConnectWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTrialBalanceDetailInput)
    connectOrCreate?: AccountCreateOrConnectWithoutTrialBalanceDetailInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
