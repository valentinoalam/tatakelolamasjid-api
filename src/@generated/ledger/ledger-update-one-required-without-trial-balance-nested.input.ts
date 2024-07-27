import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LedgerCreateWithoutTrialBalanceInput } from './ledger-create-without-trial-balance.input';
import { Type } from 'class-transformer';
import { LedgerCreateOrConnectWithoutTrialBalanceInput } from './ledger-create-or-connect-without-trial-balance.input';
import { LedgerUpsertWithoutTrialBalanceInput } from './ledger-upsert-without-trial-balance.input';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { LedgerUpdateToOneWithWhereWithoutTrialBalanceInput } from './ledger-update-to-one-with-where-without-trial-balance.input';

@InputType()
export class LedgerUpdateOneRequiredWithoutTrialBalanceNestedInput {

    @Field(() => LedgerCreateWithoutTrialBalanceInput, {nullable:true})
    @Type(() => LedgerCreateWithoutTrialBalanceInput)
    create?: LedgerCreateWithoutTrialBalanceInput;

    @Field(() => LedgerCreateOrConnectWithoutTrialBalanceInput, {nullable:true})
    @Type(() => LedgerCreateOrConnectWithoutTrialBalanceInput)
    connectOrCreate?: LedgerCreateOrConnectWithoutTrialBalanceInput;

    @Field(() => LedgerUpsertWithoutTrialBalanceInput, {nullable:true})
    @Type(() => LedgerUpsertWithoutTrialBalanceInput)
    upsert?: LedgerUpsertWithoutTrialBalanceInput;

    @Field(() => LedgerWhereUniqueInput, {nullable:true})
    @Type(() => LedgerWhereUniqueInput)
    connect?: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;

    @Field(() => LedgerUpdateToOneWithWhereWithoutTrialBalanceInput, {nullable:true})
    @Type(() => LedgerUpdateToOneWithWhereWithoutTrialBalanceInput)
    update?: LedgerUpdateToOneWithWhereWithoutTrialBalanceInput;
}
