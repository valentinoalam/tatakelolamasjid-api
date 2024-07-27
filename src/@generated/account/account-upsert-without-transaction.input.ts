import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutTransactionInput } from './account-update-without-transaction.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutTransactionInput } from './account-create-without-transaction.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutTransactionInput {

    @Field(() => AccountUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTransactionInput)
    update!: AccountUpdateWithoutTransactionInput;

    @Field(() => AccountCreateWithoutTransactionInput, {nullable:false})
    @Type(() => AccountCreateWithoutTransactionInput)
    create!: AccountCreateWithoutTransactionInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
