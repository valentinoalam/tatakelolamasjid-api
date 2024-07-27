import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantUpdateWithoutEmergencyContactInput } from './participant-update-without-emergency-contact.input';
import { ParticipantCreateWithoutEmergencyContactInput } from './participant-create-without-emergency-contact.input';

@InputType()
export class ParticipantUpsertWithWhereUniqueWithoutEmergencyContactInput {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantUpdateWithoutEmergencyContactInput, {nullable:false})
    @Type(() => ParticipantUpdateWithoutEmergencyContactInput)
    update!: ParticipantUpdateWithoutEmergencyContactInput;

    @Field(() => ParticipantCreateWithoutEmergencyContactInput, {nullable:false})
    @Type(() => ParticipantCreateWithoutEmergencyContactInput)
    create!: ParticipantCreateWithoutEmergencyContactInput;
}
