import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutTransactionInput } from './account-update-without-transaction.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutTransactionInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTransactionInput)
    data!: AccountUpdateWithoutTransactionInput;
}
