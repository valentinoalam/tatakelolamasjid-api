import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutEmergencyContactInput } from './participant-create-without-emergency-contact.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutEmergencyContactInput } from './participant-create-or-connect-without-emergency-contact.input';
import { ParticipantUpsertWithWhereUniqueWithoutEmergencyContactInput } from './participant-upsert-with-where-unique-without-emergency-contact.input';
import { ParticipantCreateManyEmergencyContactInputEnvelope } from './participant-create-many-emergency-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { ParticipantUpdateWithWhereUniqueWithoutEmergencyContactInput } from './participant-update-with-where-unique-without-emergency-contact.input';
import { ParticipantUpdateManyWithWhereWithoutEmergencyContactInput } from './participant-update-many-with-where-without-emergency-contact.input';
import { ParticipantScalarWhereInput } from './participant-scalar-where.input';

@InputType()
export class ParticipantUncheckedUpdateManyWithoutEmergencyContactNestedInput {

    @Field(() => [ParticipantCreateWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutEmergencyContactInput)
    create?: Array<ParticipantCreateWithoutEmergencyContactInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutEmergencyContactInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutEmergencyContactInput>;

    @Field(() => [ParticipantUpsertWithWhereUniqueWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantUpsertWithWhereUniqueWithoutEmergencyContactInput)
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutEmergencyContactInput>;

    @Field(() => ParticipantCreateManyEmergencyContactInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyEmergencyContactInputEnvelope)
    createMany?: ParticipantCreateManyEmergencyContactInputEnvelope;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantUpdateWithWhereUniqueWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantUpdateWithWhereUniqueWithoutEmergencyContactInput)
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutEmergencyContactInput>;

    @Field(() => [ParticipantUpdateManyWithWhereWithoutEmergencyContactInput], {nullable:true})
    @Type(() => ParticipantUpdateManyWithWhereWithoutEmergencyContactInput)
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutEmergencyContactInput>;

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    @Type(() => ParticipantScalarWhereInput)
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
