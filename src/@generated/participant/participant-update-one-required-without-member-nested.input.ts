import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateWithoutMemberInput } from './participant-create-without-member.input';
import { Type } from 'class-transformer';
import { ParticipantCreateOrConnectWithoutMemberInput } from './participant-create-or-connect-without-member.input';
import { ParticipantUpsertWithoutMemberInput } from './participant-upsert-without-member.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { ParticipantUpdateToOneWithWhereWithoutMemberInput } from './participant-update-to-one-with-where-without-member.input';

@InputType()
export class ParticipantUpdateOneRequiredWithoutMemberNestedInput {

    @Field(() => ParticipantCreateWithoutMemberInput, {nullable:true})
    @Type(() => ParticipantCreateWithoutMemberInput)
    create?: ParticipantCreateWithoutMemberInput;

    @Field(() => ParticipantCreateOrConnectWithoutMemberInput, {nullable:true})
    @Type(() => ParticipantCreateOrConnectWithoutMemberInput)
    connectOrCreate?: ParticipantCreateOrConnectWithoutMemberInput;

    @Field(() => ParticipantUpsertWithoutMemberInput, {nullable:true})
    @Type(() => ParticipantUpsertWithoutMemberInput)
    upsert?: ParticipantUpsertWithoutMemberInput;

    @Field(() => ParticipantWhereUniqueInput, {nullable:true})
    @Type(() => ParticipantWhereUniqueInput)
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => ParticipantUpdateToOneWithWhereWithoutMemberInput, {nullable:true})
    @Type(() => ParticipantUpdateToOneWithWhereWithoutMemberInput)
    update?: ParticipantUpdateToOneWithWhereWithoutMemberInput;
}
