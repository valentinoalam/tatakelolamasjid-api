import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutParticipantInput } from './user-update-without-participant.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutParticipantInput } from './user-create-without-participant.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutParticipantInput {

    @Field(() => UserUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => UserUpdateWithoutParticipantInput)
    update!: UserUpdateWithoutParticipantInput;

    @Field(() => UserCreateWithoutParticipantInput, {nullable:false})
    @Type(() => UserCreateWithoutParticipantInput)
    create!: UserCreateWithoutParticipantInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
