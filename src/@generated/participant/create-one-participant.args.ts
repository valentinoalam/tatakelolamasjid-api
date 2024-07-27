import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantCreateInput } from './participant-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneParticipantArgs {

    @Field(() => ParticipantCreateInput, {nullable:false})
    @Type(() => ParticipantCreateInput)
    data!: ParticipantCreateInput;
}
