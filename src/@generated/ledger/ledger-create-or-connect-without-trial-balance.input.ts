import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { Type } from 'class-transformer';
import { LedgerCreateWithoutTrialBalanceInput } from './ledger-create-without-trial-balance.input';

@InputType()
export class LedgerCreateOrConnectWithoutTrialBalanceInput {

    @Field(() => LedgerWhereUniqueInput, {nullable:false})
    @Type(() => LedgerWhereUniqueInput)
    where!: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;

    @Field(() => LedgerCreateWithoutTrialBalanceInput, {nullable:false})
    @Type(() => LedgerCreateWithoutTrialBalanceInput)
    create!: LedgerCreateWithoutTrialBalanceInput;
}
