import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutBankAccInput } from './account-create-without-bank-acc.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutBankAccInput } from './account-create-or-connect-without-bank-acc.input';
import { AccountUpsertWithWhereUniqueWithoutBankAccInput } from './account-upsert-with-where-unique-without-bank-acc.input';
import { AccountCreateManyBankAccInputEnvelope } from './account-create-many-bank-acc-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithWhereUniqueWithoutBankAccInput } from './account-update-with-where-unique-without-bank-acc.input';
import { AccountUpdateManyWithWhereWithoutBankAccInput } from './account-update-many-with-where-without-bank-acc.input';
import { AccountScalarWhereInput } from './account-scalar-where.input';

@InputType()
export class AccountUpdateManyWithoutBankAccNestedInput {

    @Field(() => [AccountCreateWithoutBankAccInput], {nullable:true})
    @Type(() => AccountCreateWithoutBankAccInput)
    create?: Array<AccountCreateWithoutBankAccInput>;

    @Field(() => [AccountCreateOrConnectWithoutBankAccInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutBankAccInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutBankAccInput>;

    @Field(() => [AccountUpsertWithWhereUniqueWithoutBankAccInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutBankAccInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutBankAccInput>;

    @Field(() => AccountCreateManyBankAccInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyBankAccInputEnvelope)
    createMany?: AccountCreateManyBankAccInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountUpdateWithWhereUniqueWithoutBankAccInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutBankAccInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutBankAccInput>;

    @Field(() => [AccountUpdateManyWithWhereWithoutBankAccInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutBankAccInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutBankAccInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}
