import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Type } from 'class-transformer';
import { ParticipantCreateInput } from './participant-create.input';
import { ParticipantUpdateInput } from './participant-update.input';

@ArgsType()
export class UpsertOneParticipantArgs {

    @Field(() => ParticipantWhereUniqueInput, {nullable:false})
    @Type(() => ParticipantWhereUniqueInput)
    where!: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantCreateInput, {nullable:false})
    @Type(() => ParticipantCreateInput)
    create!: ParticipantCreateInput;

    @Field(() => ParticipantUpdateInput, {nullable:false})
    @Type(() => ParticipantUpdateInput)
    update!: ParticipantUpdateInput;
}
