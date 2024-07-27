import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutSpeakersInput } from './event-update-without-speakers.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutSpeakersInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutSpeakersInput, {nullable:false})
    @Type(() => EventUpdateWithoutSpeakersInput)
    data!: EventUpdateWithoutSpeakersInput;
}
