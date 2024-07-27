import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ParticipantOrderByRelationAggregateInput } from '../participant/participant-order-by-relation-aggregate.input';
import { PositionOrderByRelationAggregateInput } from '../position/position-order-by-relation-aggregate.input';
import { UstadzEventOrderByRelationAggregateInput } from '../ustadz-event/ustadz-event-order-by-relation-aggregate.input';

@InputType()
export class EventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    place?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dtStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dtEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quota?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    heldPeriod?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => ParticipantOrderByRelationAggregateInput, {nullable:true})
    participant?: ParticipantOrderByRelationAggregateInput;

    @Field(() => PositionOrderByRelationAggregateInput, {nullable:true})
    crews?: PositionOrderByRelationAggregateInput;

    @Field(() => UstadzEventOrderByRelationAggregateInput, {nullable:true})
    speakers?: UstadzEventOrderByRelationAggregateInput;
}
