import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TrialBalanceAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    totalDebit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalCredit?: keyof typeof SortOrder;
}
