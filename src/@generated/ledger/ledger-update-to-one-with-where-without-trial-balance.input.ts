import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LedgerWhereInput } from './ledger-where.input';
import { Type } from 'class-transformer';
import { LedgerUpdateWithoutTrialBalanceInput } from './ledger-update-without-trial-balance.input';

@InputType()
export class LedgerUpdateToOneWithWhereWithoutTrialBalanceInput {

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;

    @Field(() => LedgerUpdateWithoutTrialBalanceInput, {nullable:false})
    @Type(() => LedgerUpdateWithoutTrialBalanceInput)
    data!: LedgerUpdateWithoutTrialBalanceInput;
}
