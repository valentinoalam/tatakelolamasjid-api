import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LedgerOrderByWithRelationInput } from '../ledger/ledger-order-by-with-relation.input';
import { TrialBalanceDetailOrderByRelationAggregateInput } from '../trial-balance-detail/trial-balance-detail-order-by-relation-aggregate.input';

@InputType()
export class TrialBalanceOrderByWithRelationInput {

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

    @Field(() => LedgerOrderByWithRelationInput, {nullable:true})
    ledger?: LedgerOrderByWithRelationInput;

    @Field(() => TrialBalanceDetailOrderByRelationAggregateInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailOrderByRelationAggregateInput;
}
