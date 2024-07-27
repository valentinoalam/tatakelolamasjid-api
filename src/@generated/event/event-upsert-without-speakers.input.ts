import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutSpeakersInput } from './event-update-without-speakers.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutSpeakersInput } from './event-create-without-speakers.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutSpeakersInput {

    @Field(() => EventUpdateWithoutSpeakersInput, {nullable:false})
    @Type(() => EventUpdateWithoutSpeakersInput)
    update!: EventUpdateWithoutSpeakersInput;

    @Field(() => EventCreateWithoutSpeakersInput, {nullable:false})
    @Type(() => EventCreateWithoutSpeakersInput)
    create!: EventCreateWithoutSpeakersInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
