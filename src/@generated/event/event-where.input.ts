import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumPeriodFilter } from '../prisma/enum-period-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ParticipantListRelationFilter } from '../participant/participant-list-relation-filter.input';
import { PositionListRelationFilter } from '../position/position-list-relation-filter.input';
import { UstadzEventListRelationFilter } from '../ustadz-event/ustadz-event-list-relation-filter.input';

@InputType()
export class EventWhereInput {

    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    place?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dtStart?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dtEnd?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    quota?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumPeriodFilter, {nullable:true})
    heldPeriod?: EnumPeriodFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => ParticipantListRelationFilter, {nullable:true})
    participant?: ParticipantListRelationFilter;

    @Field(() => PositionListRelationFilter, {nullable:true})
    crews?: PositionListRelationFilter;

    @Field(() => UstadzEventListRelationFilter, {nullable:true})
    speakers?: UstadzEventListRelationFilter;
}
