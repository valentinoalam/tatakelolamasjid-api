import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ProfileUpdateOneRequiredWithoutParticipantNestedInput } from '../profile/profile-update-one-required-without-participant-nested.input';
import { UserUpdateOneRequiredWithoutParticipantNestedInput } from '../user/user-update-one-required-without-participant-nested.input';
import { EventUpdateOneRequiredWithoutParticipantNestedInput } from '../event/event-update-one-required-without-participant-nested.input';
import { FamilyMemberUpdateManyWithoutGuardianNestedInput } from '../family-member/family-member-update-many-without-guardian-nested.input';

@InputType()
export class ParticipantUpdateWithoutEmergencyContactInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    withFamily?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneRequiredWithoutParticipantNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutParticipantNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutParticipantNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutParticipantNestedInput;

    @Field(() => EventUpdateOneRequiredWithoutParticipantNestedInput, {nullable:true})
    event?: EventUpdateOneRequiredWithoutParticipantNestedInput;

    @Field(() => FamilyMemberUpdateManyWithoutGuardianNestedInput, {nullable:true})
    member?: FamilyMemberUpdateManyWithoutGuardianNestedInput;
}
