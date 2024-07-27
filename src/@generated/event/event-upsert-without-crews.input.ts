import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutCrewsInput } from './event-update-without-crews.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCrewsInput } from './event-create-without-crews.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutCrewsInput {

    @Field(() => EventUpdateWithoutCrewsInput, {nullable:false})
    @Type(() => EventUpdateWithoutCrewsInput)
    update!: EventUpdateWithoutCrewsInput;

    @Field(() => EventCreateWithoutCrewsInput, {nullable:false})
    @Type(() => EventCreateWithoutCrewsInput)
    create!: EventCreateWithoutCrewsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
