import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutEventInput } from './participant-create-without-event.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutEventInput } from './participant-create-or-connect-without-event.input';
import { ParticipantCreateManyEventInputEnvelope } from './participant-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';

@InputType()
export class ParticipantUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [ParticipantCreateWithoutEventInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutEventInput)
    create?: Array<ParticipantCreateWithoutEventInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutEventInput>;

    @Field(() => ParticipantCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyEventInputEnvelope)
    createMany?: ParticipantCreateManyEventInputEnvelope;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;
}
