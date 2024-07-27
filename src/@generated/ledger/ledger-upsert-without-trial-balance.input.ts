import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LedgerUpdateWithoutTrialBalanceInput } from './ledger-update-without-trial-balance.input';
import { Type } from 'class-transformer';
import { LedgerCreateWithoutTrialBalanceInput } from './ledger-create-without-trial-balance.input';
import { LedgerWhereInput } from './ledger-where.input';

@InputType()
export class LedgerUpsertWithoutTrialBalanceInput {

    @Field(() => LedgerUpdateWithoutTrialBalanceInput, {nullable:false})
    @Type(() => LedgerUpdateWithoutTrialBalanceInput)
    update!: LedgerUpdateWithoutTrialBalanceInput;

    @Field(() => LedgerCreateWithoutTrialBalanceInput, {nullable:false})
    @Type(() => LedgerCreateWithoutTrialBalanceInput)
    create!: LedgerCreateWithoutTrialBalanceInput;

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;
}
