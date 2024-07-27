import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutUserInput } from './participant-create-without-user.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutUserInput } from './participant-create-or-connect-without-user.input';
import { ParticipantCreateManyUserInputEnvelope } from './participant-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';

@InputType()
export class ParticipantUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ParticipantCreateWithoutUserInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutUserInput)
    create?: Array<ParticipantCreateWithoutUserInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutUserInput>;

    @Field(() => ParticipantCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyUserInputEnvelope)
    createMany?: ParticipantCreateManyUserInputEnvelope;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;
}
