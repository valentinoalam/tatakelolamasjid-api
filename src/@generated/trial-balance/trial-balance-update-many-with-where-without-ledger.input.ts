import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceScalarWhereInput } from './trial-balance-scalar-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceUpdateManyMutationInput } from './trial-balance-update-many-mutation.input';

@InputType()
export class TrialBalanceUpdateManyWithWhereWithoutLedgerInput {

    @Field(() => TrialBalanceScalarWhereInput, {nullable:false})
    @Type(() => TrialBalanceScalarWhereInput)
    where!: TrialBalanceScalarWhereInput;

    @Field(() => TrialBalanceUpdateManyMutationInput, {nullable:false})
    @Type(() => TrialBalanceUpdateManyMutationInput)
    data!: TrialBalanceUpdateManyMutationInput;
}
