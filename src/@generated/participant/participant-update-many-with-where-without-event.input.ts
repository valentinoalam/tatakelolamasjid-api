import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantScalarWhereInput } from './participant-scalar-where.input';
import { Type } from 'class-transformer';
import { ParticipantUpdateManyMutationInput } from './participant-update-many-mutation.input';

@InputType()
export class ParticipantUpdateManyWithWhereWithoutEventInput {

    @Field(() => ParticipantScalarWhereInput, {nullable:false})
    @Type(() => ParticipantScalarWhereInput)
    where!: ParticipantScalarWhereInput;

    @Field(() => ParticipantUpdateManyMutationInput, {nullable:false})
    @Type(() => ParticipantUpdateManyMutationInput)
    data!: ParticipantUpdateManyMutationInput;
}
