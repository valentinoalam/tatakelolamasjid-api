import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UstadzEventCountOrderByAggregateInput } from './ustadz-event-count-order-by-aggregate.input';
import { UstadzEventMaxOrderByAggregateInput } from './ustadz-event-max-order-by-aggregate.input';
import { UstadzEventMinOrderByAggregateInput } from './ustadz-event-min-order-by-aggregate.input';

@InputType()
export class UstadzEventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ustadzId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => UstadzEventCountOrderByAggregateInput, {nullable:true})
    _count?: UstadzEventCountOrderByAggregateInput;

    @Field(() => UstadzEventMaxOrderByAggregateInput, {nullable:true})
    _max?: UstadzEventMaxOrderByAggregateInput;

    @Field(() => UstadzEventMinOrderByAggregateInput, {nullable:true})
    _min?: UstadzEventMinOrderByAggregateInput;
}
