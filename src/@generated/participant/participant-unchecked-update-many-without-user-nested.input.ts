import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutUserInput } from './participant-create-without-user.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutUserInput } from './participant-create-or-connect-without-user.input';
import { ParticipantUpsertWithWhereUniqueWithoutUserInput } from './participant-upsert-with-where-unique-without-user.input';
import { ParticipantCreateManyUserInputEnvelope } from './participant-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { ParticipantUpdateWithWhereUniqueWithoutUserInput } from './participant-update-with-where-unique-without-user.input';
import { ParticipantUpdateManyWithWhereWithoutUserInput } from './participant-update-many-with-where-without-user.input';
import { ParticipantScalarWhereInput } from './participant-scalar-where.input';

@InputType()
export class ParticipantUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ParticipantCreateWithoutUserInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutUserInput)
    create?: Array<ParticipantCreateWithoutUserInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutUserInput>;

    @Field(() => [ParticipantUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ParticipantUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ParticipantCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyUserInputEnvelope)
    createMany?: ParticipantCreateManyUserInputEnvelope;

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

    @Field(() => [ParticipantUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ParticipantUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ParticipantUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ParticipantUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    @Type(() => ParticipantScalarWhereInput)
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
