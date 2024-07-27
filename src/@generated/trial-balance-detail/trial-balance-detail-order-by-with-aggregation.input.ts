import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TrialBalanceDetailCountOrderByAggregateInput } from './trial-balance-detail-count-order-by-aggregate.input';
import { TrialBalanceDetailAvgOrderByAggregateInput } from './trial-balance-detail-avg-order-by-aggregate.input';
import { TrialBalanceDetailMaxOrderByAggregateInput } from './trial-balance-detail-max-order-by-aggregate.input';
import { TrialBalanceDetailMinOrderByAggregateInput } from './trial-balance-detail-min-order-by-aggregate.input';
import { TrialBalanceDetailSumOrderByAggregateInput } from './trial-balance-detail-sum-order-by-aggregate.input';

@InputType()
export class TrialBalanceDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trialBalanceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDebit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    openingBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    closingBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => TrialBalanceDetailCountOrderByAggregateInput, {nullable:true})
    _count?: TrialBalanceDetailCountOrderByAggregateInput;

    @Field(() => TrialBalanceDetailAvgOrderByAggregateInput, {nullable:true})
    _avg?: TrialBalanceDetailAvgOrderByAggregateInput;

    @Field(() => TrialBalanceDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: TrialBalanceDetailMaxOrderByAggregateInput;

    @Field(() => TrialBalanceDetailMinOrderByAggregateInput, {nullable:true})
    _min?: TrialBalanceDetailMinOrderByAggregateInput;

    @Field(() => TrialBalanceDetailSumOrderByAggregateInput, {nullable:true})
    _sum?: TrialBalanceDetailSumOrderByAggregateInput;
}
