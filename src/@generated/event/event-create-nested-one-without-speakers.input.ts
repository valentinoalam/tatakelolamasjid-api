import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutSpeakersInput } from './event-create-without-speakers.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutSpeakersInput } from './event-create-or-connect-without-speakers.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutSpeakersInput {

    @Field(() => EventCreateWithoutSpeakersInput, {nullable:true})
    @Type(() => EventCreateWithoutSpeakersInput)
    create?: EventCreateWithoutSpeakersInput;

    @Field(() => EventCreateOrConnectWithoutSpeakersInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutSpeakersInput)
    connectOrCreate?: EventCreateOrConnectWithoutSpeakersInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
