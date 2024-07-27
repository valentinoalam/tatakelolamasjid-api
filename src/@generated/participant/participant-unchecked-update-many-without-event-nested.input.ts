import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutEventInput } from './participant-create-without-event.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutEventInput } from './participant-create-or-connect-without-event.input';
import { ParticipantUpsertWithWhereUniqueWithoutEventInput } from './participant-upsert-with-where-unique-without-event.input';
import { ParticipantCreateManyEventInputEnvelope } from './participant-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { ParticipantUpdateWithWhereUniqueWithoutEventInput } from './participant-update-with-where-unique-without-event.input';
import { ParticipantUpdateManyWithWhereWithoutEventInput } from './participant-update-many-with-where-without-event.input';
import { ParticipantScalarWhereInput } from './participant-scalar-where.input';

@InputType()
export class ParticipantUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [ParticipantCreateWithoutEventInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutEventInput)
    create?: Array<ParticipantCreateWithoutEventInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutEventInput>;

    @Field(() => [ParticipantUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => ParticipantUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => ParticipantCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyEventInputEnvelope)
    createMany?: ParticipantCreateManyEventInputEnvelope;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantWhereUniqueInput], {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>>;

    @Field(() => [ParticipantUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => ParticipantUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [ParticipantUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => ParticipantUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    @Type(() => ParticipantScalarWhereInput)
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
