import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutTransactionInput } from './account-create-without-transaction.input';

@InputType()
export class AccountCreateOrConnectWithoutTransactionInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutTransactionInput, {nullable:false})
    @Type(() => AccountCreateWithoutTransactionInput)
    create!: AccountCreateWithoutTransactionInput;
}
