import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ParticipantListRelationFilter } from '../participant/participant-list-relation-filter.input';

@InputType()
export class EmergencyContactWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [EmergencyContactWhereInput], {nullable:true})
    AND?: Array<EmergencyContactWhereInput>;

    @Field(() => [EmergencyContactWhereInput], {nullable:true})
    OR?: Array<EmergencyContactWhereInput>;

    @Field(() => [EmergencyContactWhereInput], {nullable:true})
    NOT?: Array<EmergencyContactWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    relationType?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ParticipantListRelationFilter, {nullable:true})
    Participant?: ParticipantListRelationFilter;
}
