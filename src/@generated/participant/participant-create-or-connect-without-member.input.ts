import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantCreateWithoutMemberInput } from './participant-create-without-member.input';

@InputType()
export class ParticipantCreateOrConnectWithoutMemberInput {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantCreateWithoutMemberInput, {nullable:false})
    @Type(() => ParticipantCreateWithoutMemberInput)
    create!: ParticipantCreateWithoutMemberInput;
}
