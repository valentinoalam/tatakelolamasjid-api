import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AssetAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    economicLife?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    qty?: keyof typeof SortOrder;
}
