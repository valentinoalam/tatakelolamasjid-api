import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutParticipantInput } from './event-create-without-participant.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutParticipantInput } from './event-create-or-connect-without-participant.input';
import { EventUpsertWithoutParticipantInput } from './event-upsert-without-participant.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutParticipantInput } from './event-update-to-one-with-where-without-participant.input';

@InputType()
export class EventUpdateOneRequiredWithoutParticipantNestedInput {

    @Field(() => EventCreateWithoutParticipantInput, {nullable:true})
    @Type(() => EventCreateWithoutParticipantInput)
    create?: EventCreateWithoutParticipantInput;

    @Field(() => EventCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: EventCreateOrConnectWithoutParticipantInput;

    @Field(() => EventUpsertWithoutParticipantInput, {nullable:true})
    @Type(() => EventUpsertWithoutParticipantInput)
    upsert?: EventUpsertWithoutParticipantInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutParticipantInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutParticipantInput)
    update?: EventUpdateToOneWithWhereWithoutParticipantInput;
}
