import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCrewsInput } from './event-create-without-crews.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCrewsInput } from './event-create-or-connect-without-crews.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutCrewsInput {

    @Field(() => EventCreateWithoutCrewsInput, {nullable:true})
    @Type(() => EventCreateWithoutCrewsInput)
    create?: EventCreateWithoutCrewsInput;

    @Field(() => EventCreateOrConnectWithoutCrewsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCrewsInput)
    connectOrCreate?: EventCreateOrConnectWithoutCrewsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
