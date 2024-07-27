import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutParticipantInput } from './user-create-without-participant.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutParticipantInput } from './user-create-or-connect-without-participant.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutParticipantInput {

    @Field(() => UserCreateWithoutParticipantInput, {nullable:true})
    @Type(() => UserCreateWithoutParticipantInput)
    create?: UserCreateWithoutParticipantInput;

    @Field(() => UserCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
