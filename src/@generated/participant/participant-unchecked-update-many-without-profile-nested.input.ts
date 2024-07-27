import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutProfileInput } from './participant-create-without-profile.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutProfileInput } from './participant-create-or-connect-without-profile.input';
import { ParticipantUpsertWithWhereUniqueWithoutProfileInput } from './participant-upsert-with-where-unique-without-profile.input';
import { ParticipantCreateManyProfileInputEnvelope } from './participant-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { ParticipantUpdateWithWhereUniqueWithoutProfileInput } from './participant-update-with-where-unique-without-profile.input';
import { ParticipantUpdateManyWithWhereWithoutProfileInput } from './participant-update-many-with-where-without-profile.input';
import { ParticipantScalarWhereInput } from './participant-scalar-where.input';

@InputType()
export class ParticipantUncheckedUpdateManyWithoutProfileNestedInput {

    @Field(() => [ParticipantCreateWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantCreateWithoutProfileInput)
    create?: Array<ParticipantCreateWithoutProfileInput>;

    @Field(() => [ParticipantCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutProfileInput>;

    @Field(() => [ParticipantUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => ParticipantCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => ParticipantCreateManyProfileInputEnvelope)
    createMany?: ParticipantCreateManyProfileInputEnvelope;

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

    @Field(() => [ParticipantUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [ParticipantUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => ParticipantUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [ParticipantScalarWhereInput], {nullable:true})
    @Type(() => ParticipantScalarWhereInput)
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
