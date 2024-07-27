import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutBankAccInput } from './account-create-without-bank-acc.input';

@InputType()
export class AccountCreateOrConnectWithoutBankAccInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutBankAccInput, {nullable:false})
    @Type(() => AccountCreateWithoutBankAccInput)
    create!: AccountCreateWithoutBankAccInput;
}
