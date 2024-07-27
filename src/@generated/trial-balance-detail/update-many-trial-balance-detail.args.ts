import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailUpdateManyMutationInput } from './trial-balance-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailWhereInput } from './trial-balance-detail-where.input';

@ArgsType()
export class UpdateManyTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => TrialBalanceDetailUpdateManyMutationInput)
    data!: TrialBalanceDetailUpdateManyMutationInput;

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    @Type(() => TrialBalanceDetailWhereInput)
    where?: TrialBalanceDetailWhereInput;
}
