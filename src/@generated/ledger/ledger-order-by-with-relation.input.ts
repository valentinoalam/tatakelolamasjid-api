import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TrialBalanceOrderByRelationAggregateInput } from '../trial-balance/trial-balance-order-by-relation-aggregate.input';

@InputType()
export class LedgerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    reportPeriod?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startWeekDay?: keyof typeof SortOrder;

    @Field(() => TrialBalanceOrderByRelationAggregateInput, {nullable:true})
    TrialBalance?: TrialBalanceOrderByRelationAggregateInput;
}
