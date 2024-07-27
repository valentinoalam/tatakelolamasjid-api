import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TrialBalanceCountOrderByAggregateInput } from './trial-balance-count-order-by-aggregate.input';
import { TrialBalanceAvgOrderByAggregateInput } from './trial-balance-avg-order-by-aggregate.input';
import { TrialBalanceMaxOrderByAggregateInput } from './trial-balance-max-order-by-aggregate.input';
import { TrialBalanceMinOrderByAggregateInput } from './trial-balance-min-order-by-aggregate.input';
import { TrialBalanceSumOrderByAggregateInput } from './trial-balance-sum-order-by-aggregate.input';

@InputType()
export class TrialBalanceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ledgerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalDebit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalCredit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => TrialBalanceCountOrderByAggregateInput, {nullable:true})
    _count?: TrialBalanceCountOrderByAggregateInput;

    @Field(() => TrialBalanceAvgOrderByAggregateInput, {nullable:true})
    _avg?: TrialBalanceAvgOrderByAggregateInput;

    @Field(() => TrialBalanceMaxOrderByAggregateInput, {nullable:true})
    _max?: TrialBalanceMaxOrderByAggregateInput;

    @Field(() => TrialBalanceMinOrderByAggregateInput, {nullable:true})
    _min?: TrialBalanceMinOrderByAggregateInput;

    @Field(() => TrialBalanceSumOrderByAggregateInput, {nullable:true})
    _sum?: TrialBalanceSumOrderByAggregateInput;
}
