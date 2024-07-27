import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutParticipantInput } from './profile-create-without-participant.input';

@InputType()
export class ProfileCreateOrConnectWithoutParticipantInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutParticipantInput, {nullable:false})
    @Type(() => ProfileCreateWithoutParticipantInput)
    create!: ProfileCreateWithoutParticipantInput;
}
