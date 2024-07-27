import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantWhereInput } from './participant-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyParticipantArgs {

    @Field(() => ParticipantWhereInput, {nullable:true})
    @Type(() => ParticipantWhereInput)
    where?: ParticipantWhereInput;
}
