import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutParticipantInput } from './user-create-without-participant.input';

@InputType()
export class UserCreateOrConnectWithoutParticipantInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutParticipantInput, {nullable:false})
    @Type(() => UserCreateWithoutParticipantInput)
    create!: UserCreateWithoutParticipantInput;
}
