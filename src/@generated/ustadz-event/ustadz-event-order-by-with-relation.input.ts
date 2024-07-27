import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UstadzOrderByWithRelationInput } from '../ustadz/ustadz-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';

@InputType()
export class UstadzEventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ustadzId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => UstadzOrderByWithRelationInput, {nullable:true})
    Ustadz?: UstadzOrderByWithRelationInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    Event?: EventOrderByWithRelationInput;
}
