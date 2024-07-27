import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCrewsInput } from './event-create-without-crews.input';

@InputType()
export class EventCreateOrConnectWithoutCrewsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutCrewsInput, {nullable:false})
    @Type(() => EventCreateWithoutCrewsInput)
    create!: EventCreateWithoutCrewsInput;
}
