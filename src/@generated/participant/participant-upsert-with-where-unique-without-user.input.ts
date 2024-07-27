import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantUpdateWithoutUserInput } from './participant-update-without-user.input';
import { ParticipantCreateWithoutUserInput } from './participant-create-without-user.input';

@InputType()
export class ParticipantUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantUpdateWithoutUserInput, {nullable:false})
    @Type(() => ParticipantUpdateWithoutUserInput)
    update!: ParticipantUpdateWithoutUserInput;

    @Field(() => ParticipantCreateWithoutUserInput, {nullable:false})
    @Type(() => ParticipantCreateWithoutUserInput)
    create!: ParticipantCreateWithoutUserInput;
}
