import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceCreateWithoutLedgerInput } from './trial-balance-create-without-ledger.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateOrConnectWithoutLedgerInput } from './trial-balance-create-or-connect-without-ledger.input';
import { TrialBalanceCreateManyLedgerInputEnvelope } from './trial-balance-create-many-ledger-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';

@InputType()
export class TrialBalanceUncheckedCreateNestedManyWithoutLedgerInput {

    @Field(() => [TrialBalanceCreateWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceCreateWithoutLedgerInput)
    create?: Array<TrialBalanceCreateWithoutLedgerInput>;

    @Field(() => [TrialBalanceCreateOrConnectWithoutLedgerInput], {nullable:true})
    @Type(() => TrialBalanceCreateOrConnectWithoutLedgerInput)
    connectOrCreate?: Array<TrialBalanceCreateOrConnectWithoutLedgerInput>;

    @Field(() => TrialBalanceCreateManyLedgerInputEnvelope, {nullable:true})
    @Type(() => TrialBalanceCreateManyLedgerInputEnvelope)
    createMany?: TrialBalanceCreateManyLedgerInputEnvelope;

    @Field(() => [TrialBalanceWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>>;
}
