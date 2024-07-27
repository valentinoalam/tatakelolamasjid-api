import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutBankAccInput } from './account-update-without-bank-acc.input';

@InputType()
export class AccountUpdateWithWhereUniqueWithoutBankAccInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateWithoutBankAccInput, {nullable:false})
    @Type(() => AccountUpdateWithoutBankAccInput)
    data!: AccountUpdateWithoutBankAccInput;
}
