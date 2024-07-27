import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantUpdateWithoutEventInput } from './participant-update-without-event.input';
import { ParticipantCreateWithoutEventInput } from './participant-create-without-event.input';

@InputType()
export class ParticipantUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantUpdateWithoutEventInput, {nullable:false})
    @Type(() => ParticipantUpdateWithoutEventInput)
    update!: ParticipantUpdateWithoutEventInput;

    @Field(() => ParticipantCreateWithoutEventInput, {nullable:false})
    @Type(() => ParticipantCreateWithoutEventInput)
    create!: ParticipantCreateWithoutEventInput;
}