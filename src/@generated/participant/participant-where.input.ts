import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { EmergencyContactRelationFilter } from '../emergency-contact/emergency-contact-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { FamilyMemberListRelationFilter } from '../family-member/family-member-list-relation-filter.input';

@InputType()
export class ParticipantWhereInput {

    @Field(() => [ParticipantWhereInput], {nullable:true})
    AND?: Array<ParticipantWhereInput>;

    @Field(() => [ParticipantWhereInput], {nullable:true})
    OR?: Array<ParticipantWhereInput>;

    @Field(() => [ParticipantWhereInput], {nullable:true})
    NOT?: Array<ParticipantWhereInput>;

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

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => EmergencyContactRelationFilter, {nullable:true})
    emergencyContact?: EmergencyContactRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => FamilyMemberListRelationFilter, {nullable:true})
    member?: FamilyMemberListRelationFilter;
}
