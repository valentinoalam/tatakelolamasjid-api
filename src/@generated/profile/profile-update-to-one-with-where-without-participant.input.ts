import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutParticipantInput } from './profile-update-without-participant.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutParticipantInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutParticipantInput)
    data!: ProfileUpdateWithoutParticipantInput;
}
