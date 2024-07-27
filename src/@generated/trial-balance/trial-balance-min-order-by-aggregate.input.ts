import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TrialBalanceMinOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
