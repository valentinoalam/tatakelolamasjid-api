import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutBankAccInput } from './account-create-without-bank-acc.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutBankAccInput } from './account-create-or-connect-without-bank-acc.input';
import { AccountCreateManyBankAccInputEnvelope } from './account-create-many-bank-acc-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountUncheckedCreateNestedManyWithoutBankAccInput {

    @Field(() => [AccountCreateWithoutBankAccInput], {nullable:true})
    @Type(() => AccountCreateWithoutBankAccInput)
    create?: Array<AccountCreateWithoutBankAccInput>;

    @Field(() => [AccountCreateOrConnectWithoutBankAccInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutBankAccInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutBankAccInput>;

    @Field(() => AccountCreateManyBankAccInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyBankAccInputEnvelope)
    createMany?: AccountCreateManyBankAccInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
