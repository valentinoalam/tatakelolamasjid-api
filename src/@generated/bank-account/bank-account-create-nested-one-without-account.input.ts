import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankAccountCreateWithoutAccountInput } from './bank-account-create-without-account.input';
import { Type } from 'class-transformer';
import { BankAccountCreateOrConnectWithoutAccountInput } from './bank-account-create-or-connect-without-account.input';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';

@InputType()
export class BankAccountCreateNestedOneWithoutAccountInput {

    @Field(() => BankAccountCreateWithoutAccountInput, {nullable:true})
    @Type(() => BankAccountCreateWithoutAccountInput)
    create?: BankAccountCreateWithoutAccountInput;

    @Field(() => BankAccountCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => BankAccountCreateOrConnectWithoutAccountInput)
    connectOrCreate?: BankAccountCreateOrConnectWithoutAccountInput;

    @Field(() => BankAccountWhereUniqueInput, {nullable:true})
    @Type(() => BankAccountWhereUniqueInput)
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
