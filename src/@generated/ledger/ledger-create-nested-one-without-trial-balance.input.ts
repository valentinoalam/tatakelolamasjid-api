import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LedgerCreateWithoutTrialBalanceInput } from './ledger-create-without-trial-balance.input';
import { Type } from 'class-transformer';
import { LedgerCreateOrConnectWithoutTrialBalanceInput } from './ledger-create-or-connect-without-trial-balance.input';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';

@InputType()
export class LedgerCreateNestedOneWithoutTrialBalanceInput {

    @Field(() => LedgerCreateWithoutTrialBalanceInput, {nullable:true})
    @Type(() => LedgerCreateWithoutTrialBalanceInput)
    create?: LedgerCreateWithoutTrialBalanceInput;

    @Field(() => LedgerCreateOrConnectWithoutTrialBalanceInput, {nullable:true})
    @Type(() => LedgerCreateOrConnectWithoutTrialBalanceInput)
    connectOrCreate?: LedgerCreateOrConnectWithoutTrialBalanceInput;

    @Field(() => LedgerWhereUniqueInput, {nullable:true})
    @Type(() => LedgerWhereUniqueInput)
    connect?: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;
}
