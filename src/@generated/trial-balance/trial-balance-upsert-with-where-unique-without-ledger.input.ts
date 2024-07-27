import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceUpdateWithoutLedgerInput } from './trial-balance-update-without-ledger.input';
import { TrialBalanceCreateWithoutLedgerInput } from './trial-balance-create-without-ledger.input';

@InputType()
export class TrialBalanceUpsertWithWhereUniqueWithoutLedgerInput {

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceUpdateWithoutLedgerInput, {nullable:false})
    @Type(() => TrialBalanceUpdateWithoutLedgerInput)
    update!: TrialBalanceUpdateWithoutLedgerInput;

    @Field(() => TrialBalanceCreateWithoutLedgerInput, {nullable:false})
    @Type(() => TrialBalanceCreateWithoutLedgerInput)
    create!: TrialBalanceCreateWithoutLedgerInput;
}
