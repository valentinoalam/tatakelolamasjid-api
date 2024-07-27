import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankAccountCreateWithoutAccountInput } from './bank-account-create-without-account.input';
import { Type } from 'class-transformer';
import { BankAccountCreateOrConnectWithoutAccountInput } from './bank-account-create-or-connect-without-account.input';
import { BankAccountUpsertWithoutAccountInput } from './bank-account-upsert-without-account.input';
import { BankAccountWhereInput } from './bank-account-where.input';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';
import { BankAccountUpdateToOneWithWhereWithoutAccountInput } from './bank-account-update-to-one-with-where-without-account.input';

@InputType()
export class BankAccountUpdateOneWithoutAccountNestedInput {

    @Field(() => BankAccountCreateWithoutAccountInput, {nullable:true})
    @Type(() => BankAccountCreateWithoutAccountInput)
    create?: BankAccountCreateWithoutAccountInput;

    @Field(() => BankAccountCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => BankAccountCreateOrConnectWithoutAccountInput)
    connectOrCreate?: BankAccountCreateOrConnectWithoutAccountInput;

    @Field(() => BankAccountUpsertWithoutAccountInput, {nullable:true})
    @Type(() => BankAccountUpsertWithoutAccountInput)
    upsert?: BankAccountUpsertWithoutAccountInput;

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    disconnect?: BankAccountWhereInput;

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    delete?: BankAccountWhereInput;

    @Field(() => BankAccountWhereUniqueInput, {nullable:true})
    @Type(() => BankAccountWhereUniqueInput)
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;

    @Field(() => BankAccountUpdateToOneWithWhereWithoutAccountInput, {nullable:true})
    @Type(() => BankAccountUpdateToOneWithWhereWithoutAccountInput)
    update?: BankAccountUpdateToOneWithWhereWithoutAccountInput;
}
