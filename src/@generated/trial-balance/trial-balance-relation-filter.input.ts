import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';

@InputType()
export class TrialBalanceRelationFilter {

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    is?: TrialBalanceWhereInput;

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    isNot?: TrialBalanceWhereInput;
}
