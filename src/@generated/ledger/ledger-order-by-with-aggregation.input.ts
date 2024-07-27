import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LedgerCountOrderByAggregateInput } from './ledger-count-order-by-aggregate.input';
import { LedgerMaxOrderByAggregateInput } from './ledger-max-order-by-aggregate.input';
import { LedgerMinOrderByAggregateInput } from './ledger-min-order-by-aggregate.input';

@InputType()
export class LedgerOrderByWithAggregationInput {

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

    @Field(() => LedgerCountOrderByAggregateInput, {nullable:true})
    _count?: LedgerCountOrderByAggregateInput;

    @Field(() => LedgerMaxOrderByAggregateInput, {nullable:true})
    _max?: LedgerMaxOrderByAggregateInput;

    @Field(() => LedgerMinOrderByAggregateInput, {nullable:true})
    _min?: LedgerMinOrderByAggregateInput;
}
