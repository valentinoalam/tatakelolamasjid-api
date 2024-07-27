import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTrialBalanceDetailInput } from './account-create-without-trial-balance-detail.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTrialBalanceDetailInput } from './account-create-or-connect-without-trial-balance-detail.input';
import { AccountUpsertWithoutTrialBalanceDetailInput } from './account-upsert-without-trial-balance-detail.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutTrialBalanceDetailInput } from './account-update-to-one-with-where-without-trial-balance-detail.input';

@InputType()
export class AccountUpdateOneRequiredWithoutTrialBalanceDetailNestedInput {

    @Field(() => AccountCreateWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => AccountCreateWithoutTrialBalanceDetailInput)
    create?: AccountCreateWithoutTrialBalanceDetailInput;

    @Field(() => AccountCreateOrConnectWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTrialBalanceDetailInput)
    connectOrCreate?: AccountCreateOrConnectWithoutTrialBalanceDetailInput;

    @Field(() => AccountUpsertWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => AccountUpsertWithoutTrialBalanceDetailInput)
    upsert?: AccountUpsertWithoutTrialBalanceDetailInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutTrialBalanceDetailInput)
    update?: AccountUpdateToOneWithWhereWithoutTrialBalanceDetailInput;
}
