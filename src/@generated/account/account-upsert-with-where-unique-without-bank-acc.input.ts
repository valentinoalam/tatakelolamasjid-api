import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutBankAccInput } from './account-update-without-bank-acc.input';
import { AccountCreateWithoutBankAccInput } from './account-create-without-bank-acc.input';

@InputType()
export class AccountUpsertWithWhereUniqueWithoutBankAccInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateWithoutBankAccInput, {nullable:false})
    @Type(() => AccountUpdateWithoutBankAccInput)
    update!: AccountUpdateWithoutBankAccInput;

    @Field(() => AccountCreateWithoutBankAccInput, {nullable:false})
    @Type(() => AccountCreateWithoutBankAccInput)
    create!: AccountCreateWithoutBankAccInput;
}
