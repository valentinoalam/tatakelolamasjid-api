import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutProfileInput } from './participant-create-without-profile.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutProfileInput } from './participant-create-or-connect-without-profile.input';
import { ParticipantCreateManyProfileInputEnvelope } from './participant-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';

@InputType()
export class ParticipantCreateNestedManyWithoutProfileInput {

    @Field(() => [ParticipantCreateWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutProfileInput)
    create?: Array<ParticipantCreateWithoutProfileInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutProfileInput>;

    @Field(() => ParticipantCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyProfileInputEnvelope)
    createMany?: ParticipantCreateManyProfileInputEnvelope;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;
}
