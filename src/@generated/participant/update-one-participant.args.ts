import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantUpdateInput } from './participant-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';

@ArgsType()
export class UpdateOneParticipantArgs {

    @Field(() => ParticipantUpdateInput, {nullable:false})
    @Type(() => ParticipantUpdateInput)
    data!: ParticipantUpdateInput;

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;
}
