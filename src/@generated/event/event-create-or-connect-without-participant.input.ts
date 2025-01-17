import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutParticipantInput } from './event-create-without-participant.input';

@InputType()
export class EventCreateOrConnectWithoutParticipantInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutParticipantInput, {nullable:false})
    @Type(() => EventCreateWithoutParticipantInput)
    create!: EventCreateWithoutParticipantInput;
}
