import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantCreateManyInput } from './participant-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyParticipantArgs {

    @Field(() => [ParticipantCreateManyInput], {nullable:false})
    @Type(() => ParticipantCreateManyInput)
    data!: Array<ParticipantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
