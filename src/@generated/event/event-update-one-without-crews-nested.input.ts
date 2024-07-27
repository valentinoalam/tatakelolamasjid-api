import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCrewsInput } from './event-create-without-crews.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCrewsInput } from './event-create-or-connect-without-crews.input';
import { EventUpsertWithoutCrewsInput } from './event-upsert-without-crews.input';
import { EventWhereInput } from './event-where.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutCrewsInput } from './event-update-to-one-with-where-without-crews.input';

@InputType()
export class EventUpdateOneWithoutCrewsNestedInput {

    @Field(() => EventCreateWithoutCrewsInput, {nullable:true})
    @Type(() => EventCreateWithoutCrewsInput)
    create?: EventCreateWithoutCrewsInput;

    @Field(() => EventCreateOrConnectWithoutCrewsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCrewsInput)
    connectOrCreate?: EventCreateOrConnectWithoutCrewsInput;

    @Field(() => EventUpsertWithoutCrewsInput, {nullable:true})
    @Type(() => EventUpsertWithoutCrewsInput)
    upsert?: EventUpsertWithoutCrewsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    disconnect?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    delete?: EventWhereInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutCrewsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutCrewsInput)
    update?: EventUpdateToOneWithWhereWithoutCrewsInput;
}
