import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantCreateWithoutEmergencyContactInput } from './participant-create-without-emergency-contact.input';

@InputType()
export class ParticipantCreateOrConnectWithoutEmergencyContactInput {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantCreateWithoutEmergencyContactInput, {nullable:false})
    @Type(() => ParticipantCreateWithoutEmergencyContactInput)
    create!: ParticipantCreateWithoutEmergencyContactInput;
}
