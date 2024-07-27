import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateWithoutLedgerInput } from './trial-balance-create-without-ledger.input';

@InputType()
export class TrialBalanceCreateOrConnectWithoutLedgerInput {

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceCreateWithoutLedgerInput, {nullable:false})
    @Type(() => TrialBalanceCreateWithoutLedgerInput)
    create!: TrialBalanceCreateWithoutLedgerInput;
}
