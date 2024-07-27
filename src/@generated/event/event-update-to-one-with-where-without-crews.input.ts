import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutCrewsInput } from './event-update-without-crews.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutCrewsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutCrewsInput, {nullable:false})
    @Type(() => EventUpdateWithoutCrewsInput)
    data!: EventUpdateWithoutCrewsInput;
}
