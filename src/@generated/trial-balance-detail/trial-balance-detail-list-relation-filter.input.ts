import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailWhereInput } from './trial-balance-detail-where.input';

@InputType()
export class TrialBalanceDetailListRelationFilter {

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    every?: TrialBalanceDetailWhereInput;

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    some?: TrialBalanceDetailWhereInput;

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    none?: TrialBalanceDetailWhereInput;
}
