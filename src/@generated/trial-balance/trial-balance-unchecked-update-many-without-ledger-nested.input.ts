import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceCreateWithoutLedgerInput } from './trial-balance-create-without-ledger.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateOrConnectWithoutLedgerInput } from './trial-balance-create-or-connect-without-ledger.input';
import { TrialBalanceUpsertWithWhereUniqueWithoutLedgerInput } from './trial-balance-upsert-with-where-unique-without-ledger.input';
import { TrialBalanceCreateManyLedgerInputEnvelope } from './trial-balance-create-many-ledger-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { TrialBalanceUpdateWithWhereUniqueWithoutLedgerInput } from './trial-balance-update-with-where-unique-without-ledger.input';
import { TrialBalanceUpdateManyWithWhereWithoutLedgerInput } from './trial-balance-update-many-with-where-without-ledger.input';
import { TrialBalanceScalarWhereInput } from './trial-balance-scalar-where.input';

@InputType()
export class TrialBalanceUncheckedUpdateManyWithoutLedgerNestedInput {

    @Field(() => [TrialBalanceCreateWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceCreateWithoutLedgerInput)
    create?: Array<TrialBalanceCreateWithoutLedgerInput>;

    @Field(() => [TrialBalanceCreateOrConnectWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceCreateOrConnectWithoutLedgerInput)
    connectOrCreate?: Array<TrialBalanceCreateOrConnectWithoutLedgerInput>;

    @Field(() => [TrialBalanceUpsertWithWhereUniqueWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceUpsertWithWhereUniqueWithoutLedgerInput)
    upsert?: Array<TrialBalanceUpsertWithWhereUniqueWithoutLedgerInput>;

    @Field(() => TrialBalanceCreateManyLedgerInputEnvelope, {nullable:true})
    @Type(() => TrialBalanceCreateManyLedgerInputEnvelope)
    createMany?: TrialBalanceCreateManyLedgerInputEnvelope;

    @Field(() => [TrialBalanceWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceUpdateWithWhereUniqueWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceUpdateWithWhereUniqueWithoutLedgerInput)
    update?: Array<TrialBalanceUpdateWithWhereUniqueWithoutLedgerInput>;

    @Field(() => [TrialBalanceUpdateManyWithWhereWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceUpdateManyWithWhereWithoutLedgerInput)
    updateMany?: Array<TrialBalanceUpdateManyWithWhereWithoutLedgerInput>;

    @Field(() => [TrialBalanceScalarWhereInput], {nullable:true})
    @Type(() => TrialBalanceScalarWhereInput)
    deleteMany?: Array<TrialBalanceScalarWhereInput>;
}
