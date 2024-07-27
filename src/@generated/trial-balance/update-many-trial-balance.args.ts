import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceUpdateManyMutationInput } from './trial-balance-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TrialBalanceWhereInput } from './trial-balance-where.input';

@ArgsType()
export class UpdateManyTrialBalanceArgs {

    @Field(() => TrialBalanceUpdateManyMutationInput, {nullable:false})
    @Type(() => TrialBalanceUpdateManyMutationInput)
    data!: TrialBalanceUpdateManyMutationInput;

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    @Type(() => TrialBalanceWhereInput)
    where?: TrialBalanceWhereInput;
}
