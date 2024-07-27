import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantWhereInput } from './participant-where.input';
import { Type } from 'class-transformer';
import { ParticipantUpdateWithoutMemberInput } from './participant-update-without-member.input';

@InputType()
export class ParticipantUpdateToOneWithWhereWithoutMemberInput {

    @Field(() => ParticipantWhereInput, {nullable:true})
    @Type(() => ParticipantWhereInput)
    where?: ParticipantWhereInput;

    @Field(() => ParticipantUpdateWithoutMemberInput, {nullable:false})
    @Type(() => ParticipantUpdateWithoutMemberInput)
    data!: ParticipantUpdateWithoutMemberInput;
}
