import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutSpeakersInput } from './event-create-without-speakers.input';

@InputType()
export class EventCreateOrConnectWithoutSpeakersInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutSpeakersInput, {nullable:false})
    @Type(() => EventCreateWithoutSpeakersInput)
    create!: EventCreateWithoutSpeakersInput;
}
