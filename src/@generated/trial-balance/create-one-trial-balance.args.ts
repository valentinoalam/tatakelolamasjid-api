import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceCreateInput } from './trial-balance-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTrialBalanceArgs {

    @Field(() => TrialBalanceCreateInput, {nullable:false})
    @Type(() => TrialBalanceCreateInput)
    data!: TrialBalanceCreateInput;
}
