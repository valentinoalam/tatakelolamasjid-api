import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutParticipantInput } from './profile-create-without-participant.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutParticipantInput } from './profile-create-or-connect-without-participant.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutParticipantInput {

    @Field(() => ProfileCreateWithoutParticipantInput, {nullable:true})
    @Type(() => ProfileCreateWithoutParticipantInput)
    create?: ProfileCreateWithoutParticipantInput;

    @Field(() => ProfileCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutParticipantInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
