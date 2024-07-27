import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutEmergencyContactInput } from './participant-create-without-emergency-contact.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutEmergencyContactInput } from './participant-create-or-connect-without-emergency-contact.input';
import { ParticipantCreateManyEmergencyContactInputEnvelope } from './participant-create-many-emergency-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';

@InputType()
export class ParticipantUncheckedCreateNestedManyWithoutEmergencyContactInput {

    @Field(() => [ParticipantCreateWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutEmergencyContactInput)
    create?: Array<ParticipantCreateWithoutEmergencyContactInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutEmergencyContactInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutEmergencyContactInput>;

    @Field(() => ParticipantCreateManyEmergencyContactInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyEmergencyContactInputEnvelope)
    createMany?: ParticipantCreateManyEmergencyContactInputEnvelope;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;
}
