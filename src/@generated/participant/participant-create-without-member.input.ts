import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutParticipantInput } from '../profile/profile-create-nested-one-without-participant.input';
import { EmergencyContactCreateNestedOneWithoutParticipantInput } from '../emergency-contact/emergency-contact-create-nested-one-without-participant.input';
import { UserCreateNestedOneWithoutParticipantInput } from '../user/user-create-nested-one-without-participant.input';
import { EventCreateNestedOneWithoutParticipantInput } from '../event/event-create-nested-one-without-participant.input';

@InputType()
export class ParticipantCreateWithoutMemberInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:false})
    withFamily!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileCreateNestedOneWithoutParticipantInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutParticipantInput;

    @Field(() => EmergencyContactCreateNestedOneWithoutParticipantInput, {nullable:false})
    emergencyContact!: EmergencyContactCreateNestedOneWithoutParticipantInput;

    @Field(() => UserCreateNestedOneWithoutParticipantInput, {nullable:false})
    user!: UserCreateNestedOneWithoutParticipantInput;

    @Field(() => EventCreateNestedOneWithoutParticipantInput, {nullable:false})
    event!: EventCreateNestedOneWithoutParticipantInput;
}
