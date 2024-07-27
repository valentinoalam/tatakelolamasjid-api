import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateManyTrialBalanceInput } from './trial-balance-detail-create-many-trial-balance.input';
import { Type } from 'class-transformer';

@InputType()
export class TrialBalanceDetailCreateManyTrialBalanceInputEnvelope {

    @Field(() => [TrialBalanceDetailCreateManyTrialBalanceInput], {nullable:false})
    @Type(() => TrialBalanceDetailCreateManyTrialBalanceInput)
    data!: Array<TrialBalanceDetailCreateManyTrialBalanceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
