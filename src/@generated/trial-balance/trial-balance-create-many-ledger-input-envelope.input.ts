import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceCreateManyLedgerInput } from './trial-balance-create-many-ledger.input';
import { Type } from 'class-transformer';

@InputType()
export class TrialBalanceCreateManyLedgerInputEnvelope {

    @Field(() => [TrialBalanceCreateManyLedgerInput], {nullable:false})
    @Type(() => TrialBalanceCreateManyLedgerInput)
    data!: Array<TrialBalanceCreateManyLedgerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
