import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutParticipantInput } from './event-update-without-participant.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutParticipantInput } from './event-create-without-participant.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutParticipantInput {

    @Field(() => EventUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => EventUpdateWithoutParticipantInput)
    update!: EventUpdateWithoutParticipantInput;

    @Field(() => EventCreateWithoutParticipantInput, {nullable:false})
    @Type(() => EventCreateWithoutParticipantInput)
    create!: EventCreateWithoutParticipantInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
