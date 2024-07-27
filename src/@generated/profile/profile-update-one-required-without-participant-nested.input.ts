import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutParticipantInput } from './profile-create-without-participant.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutParticipantInput } from './profile-create-or-connect-without-participant.input';
import { ProfileUpsertWithoutParticipantInput } from './profile-upsert-without-participant.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutParticipantInput } from './profile-update-to-one-with-where-without-participant.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutParticipantNestedInput {

    @Field(() => ProfileCreateWithoutParticipantInput, {nullable:true})
    @Type(() => ProfileCreateWithoutParticipantInput)
    create?: ProfileCreateWithoutParticipantInput;

    @Field(() => ProfileCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutParticipantInput;

    @Field(() => ProfileUpsertWithoutParticipantInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutParticipantInput)
    upsert?: ProfileUpsertWithoutParticipantInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutParticipantInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutParticipantInput)
    update?: ProfileUpdateToOneWithWhereWithoutParticipantInput;
}
