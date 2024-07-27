import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutParticipantInput } from './user-create-without-participant.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutParticipantInput } from './user-create-or-connect-without-participant.input';
import { UserUpsertWithoutParticipantInput } from './user-upsert-without-participant.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutParticipantInput } from './user-update-to-one-with-where-without-participant.input';

@InputType()
export class UserUpdateOneRequiredWithoutParticipantNestedInput {

    @Field(() => UserCreateWithoutParticipantInput, {nullable:true})
    @Type(() => UserCreateWithoutParticipantInput)
    create?: UserCreateWithoutParticipantInput;

    @Field(() => UserCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput;

    @Field(() => UserUpsertWithoutParticipantInput, {nullable:true})
    @Type(() => UserUpsertWithoutParticipantInput)
    upsert?: UserUpsertWithoutParticipantInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutParticipantInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutParticipantInput)
    update?: UserUpdateToOneWithWhereWithoutParticipantInput;
}
