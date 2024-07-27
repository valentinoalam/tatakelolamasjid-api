import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateManyUserInput } from './participant-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ParticipantCreateManyUserInputEnvelope {

    @Field(() => [ParticipantCreateManyUserInput], {nullable:false})
    @Type(() => ParticipantCreateManyUserInput)
    data!: Array<ParticipantCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
