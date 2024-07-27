import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateInput } from './trial-balance-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailCreateInput, {nullable:false})
    @Type(() => TrialBalanceDetailCreateInput)
    data!: TrialBalanceDetailCreateInput;
}
