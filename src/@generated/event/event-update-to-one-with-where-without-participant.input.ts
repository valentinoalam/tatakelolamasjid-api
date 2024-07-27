import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutParticipantInput } from './event-update-without-participant.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutParticipantInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => EventUpdateWithoutParticipantInput)
    data!: EventUpdateWithoutParticipantInput;
}
