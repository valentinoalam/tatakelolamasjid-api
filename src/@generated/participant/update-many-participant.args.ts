import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantUpdateManyMutationInput } from './participant-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ParticipantWhereInput } from './participant-where.input';

@ArgsType()
export class UpdateManyParticipantArgs {

    @Field(() => ParticipantUpdateManyMutationInput, {nullable:false})
    @Type(() => ParticipantUpdateManyMutationInput)
    data!: ParticipantUpdateManyMutationInput;

    @Field(() => ParticipantWhereInput, {nullable:true})
    @Type(() => ParticipantWhereInput)
    where?: ParticipantWhereInput;
}
