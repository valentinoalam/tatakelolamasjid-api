import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutParticipantInput } from './profile-update-without-participant.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutParticipantInput } from './profile-create-without-participant.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutParticipantInput {

    @Field(() => ProfileUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutParticipantInput)
    update!: ProfileUpdateWithoutParticipantInput;

    @Field(() => ProfileCreateWithoutParticipantInput, {nullable:false})
    @Type(() => ProfileCreateWithoutParticipantInput)
    create!: ProfileCreateWithoutParticipantInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
