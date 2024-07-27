import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EventNullableRelationFilter } from '../event/event-nullable-relation-filter.input';

@InputType()
export class PositionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [PositionWhereInput], {nullable:true})
    AND?: Array<PositionWhereInput>;

    @Field(() => [PositionWhereInput], {nullable:true})
    OR?: Array<PositionWhereInput>;

    @Field(() => [PositionWhereInput], {nullable:true})
    NOT?: Array<PositionWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    eventId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    periode?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => EventNullableRelationFilter, {nullable:true})
    event?: EventNullableRelationFilter;
}
