import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTransactionInput } from './account-create-without-transaction.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTransactionInput } from './account-create-or-connect-without-transaction.input';
import { AccountUpsertWithoutTransactionInput } from './account-upsert-without-transaction.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutTransactionInput } from './account-update-to-one-with-where-without-transaction.input';

@InputType()
export class AccountUpdateOneRequiredWithoutTransactionNestedInput {

    @Field(() => AccountCreateWithoutTransactionInput, {nullable:true})
    @Type(() => AccountCreateWithoutTransactionInput)
    create?: AccountCreateWithoutTransactionInput;

    @Field(() => AccountCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionInput;

    @Field(() => AccountUpsertWithoutTransactionInput, {nullable:true})
    @Type(() => AccountUpsertWithoutTransactionInput)
    upsert?: AccountUpsertWithoutTransactionInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutTransactionInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutTransactionInput)
    update?: AccountUpdateToOneWithWhereWithoutTransactionInput;
}
