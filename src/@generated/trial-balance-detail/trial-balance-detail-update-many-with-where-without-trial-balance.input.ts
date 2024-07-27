import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailScalarWhereInput } from './trial-balance-detail-scalar-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailUpdateManyMutationInput } from './trial-balance-detail-update-many-mutation.input';

@InputType()
export class TrialBalanceDetailUpdateManyWithWhereWithoutTrialBalanceInput {

    @Field(() => TrialBalanceDetailScalarWhereInput, {nullable:false})
    @Type(() => TrialBalanceDetailScalarWhereInput)
    where!: TrialBalanceDetailScalarWhereInput;

    @Field(() => TrialBalanceDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => TrialBalanceDetailUpdateManyMutationInput)
    data!: TrialBalanceDetailUpdateManyMutationInput;
}
