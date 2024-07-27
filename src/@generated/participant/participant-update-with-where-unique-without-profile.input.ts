import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantUpdateWithoutProfileInput } from './participant-update-without-profile.input';

@InputType()
export class ParticipantUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantUpdateWithoutProfileInput, {nullable:false})
    @Type(() => ParticipantUpdateWithoutProfileInput)
    data!: ParticipantUpdateWithoutProfileInput;
}
