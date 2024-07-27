import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailWhereInput } from './trial-balance-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    @Type(() => TrialBalanceDetailWhereInput)
    where?: TrialBalanceDetailWhereInput;
}
