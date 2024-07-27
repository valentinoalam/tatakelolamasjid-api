import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutSpeakersInput } from './event-create-without-speakers.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutSpeakersInput } from './event-create-or-connect-without-speakers.input';
import { EventUpsertWithoutSpeakersInput } from './event-upsert-without-speakers.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutSpeakersInput } from './event-update-to-one-with-where-without-speakers.input';

@InputType()
export class EventUpdateOneRequiredWithoutSpeakersNestedInput {

    @Field(() => EventCreateWithoutSpeakersInput, {nullable:true})
    @Type(() => EventCreateWithoutSpeakersInput)
    create?: EventCreateWithoutSpeakersInput;

    @Field(() => EventCreateOrConnectWithoutSpeakersInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutSpeakersInput)
    connectOrCreate?: EventCreateOrConnectWithoutSpeakersInput;

    @Field(() => EventUpsertWithoutSpeakersInput, {nullable:true})
    @Type(() => EventUpsertWithoutSpeakersInput)
    upsert?: EventUpsertWithoutSpeakersInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutSpeakersInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutSpeakersInput)
    update?: EventUpdateToOneWithWhereWithoutSpeakersInput;
}
