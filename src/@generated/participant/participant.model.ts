import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { EmergencyContact } from '../emergency-contact/emergency-contact.model';
import { User } from '../user/user.model';
import { Event } from '../event/event.model';
import { FamilyMember } from '../family-member/family-member.model';
import { ParticipantCount } from './participant-count.output';

@ObjectType()
export class Participant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    eventId!: string;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => String, {nullable:false})
    emergencyId!: string;

    @Field(() => Boolean, {nullable:false})
    withFamily!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Profile, {nullable:false})
    profile?: Profile;

    @Field(() => EmergencyContact, {nullable:false})
    emergencyContact?: EmergencyContact;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Event, {nullable:false})
    event?: Event;

    @Field(() => [FamilyMember], {nullable:true})
    member?: Array<FamilyMember>;

    @Field(() => ParticipantCount, {nullable:false})
    _count?: ParticipantCount;
}
