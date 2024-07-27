import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AssetStatusSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    availableQty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalQty?: keyof typeof SortOrder;
}