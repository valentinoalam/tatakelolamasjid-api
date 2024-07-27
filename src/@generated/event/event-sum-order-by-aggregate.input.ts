import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    quota?: keyof typeof SortOrder;
}
