import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutParticipantInput } from './event-create-without-participant.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutParticipantInput } from './event-create-or-connect-without-participant.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutParticipantInput {

    @Field(() => EventCreateWithoutParticipantInput, {nullable:true})
    @Type(() => EventCreateWithoutParticipantInput)
    create?: EventCreateWithoutParticipantInput;

    @Field(() => EventCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: EventCreateOrConnectWithoutParticipantInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
