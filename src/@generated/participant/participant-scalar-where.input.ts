import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ParticipantScalarWhereInput {

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    AND?: Array<ParticipantScalarWhereInput>;

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    OR?: Array<ParticipantScalarWhereInput>;

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    NOT?: Array<ParticipantScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    eventId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    emergencyId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    withFamily?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
