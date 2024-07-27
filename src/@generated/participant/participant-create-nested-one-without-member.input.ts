import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutMemberInput } from './participant-create-without-member.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutMemberInput } from './participant-create-or-connect-without-member.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';

@InputType()
export class ParticipantCreateNestedOneWithoutMemberInput {

    @Field(() => ParticipantCreateWithoutMemberInput, {nullable:true})
    @Type(() => ParticipantCreateWithoutMemberInput)
    create?: ParticipantCreateWithoutMemberInput;

    @Field(() => ParticipantCreateOrConnectWithoutMemberInput, {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutMemberInput)
    connectOrCreate?: ParticipantCreateOrConnectWithoutMemberInput;

    @Field(() => ParticipantWhereUniqueInput, {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;
}
