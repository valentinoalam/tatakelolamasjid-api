import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TrialBalanceDetailSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    openingBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    closingBalance?: keyof typeof SortOrder;
}
