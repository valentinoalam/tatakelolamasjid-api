import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UstadzEventOrderByRelationAggregateInput } from '../ustadz-event/ustadz-event-order-by-relation-aggregate.input';

@InputType()
export class UstadzOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => UstadzEventOrderByRelationAggregateInput, {nullable:true})
    attendAs?: UstadzEventOrderByRelationAggregateInput;
}
