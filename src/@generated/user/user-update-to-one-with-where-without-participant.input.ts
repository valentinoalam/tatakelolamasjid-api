import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutParticipantInput } from './user-update-without-participant.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutParticipantInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => UserUpdateWithoutParticipantInput)
    data!: UserUpdateWithoutParticipantInput;
}
