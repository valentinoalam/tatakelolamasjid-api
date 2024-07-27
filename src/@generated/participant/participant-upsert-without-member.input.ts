import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantUpdateWithoutMemberInput } from './participant-update-without-member.input';
import { Type } from 'class-transformer';
import { ParticipantCreateWithoutMemberInput } from './participant-create-without-member.input';
import { ParticipantWhereInput } from './participant-where.input';

@InputType()
export class ParticipantUpsertWithoutMemberInput {

    @Field(() => ParticipantUpdateWithoutMemberInput, {nullable:false})
    @Type(() => ParticipantUpdateWithoutMemberInput)
    update!: ParticipantUpdateWithoutMemberInput;

    @Field(() => ParticipantCreateWithoutMemberInput, {nullable:false})
    @Type(() => ParticipantCreateWithoutMemberInput)
    create!: ParticipantCreateWithoutMemberInput;

    @Field(() => ParticipantWhereInput, {nullable:true})
    @Type(() => ParticipantWhereInput)
    where?: ParticipantWhereInput;
}
