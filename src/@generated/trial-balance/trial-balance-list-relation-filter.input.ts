import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';

@InputType()
export class TrialBalanceListRelationFilter {

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    every?: TrialBalanceWhereInput;

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    some?: TrialBalanceWhereInput;

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    none?: TrialBalanceWhereInput;
}
