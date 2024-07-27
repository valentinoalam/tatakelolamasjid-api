import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateManyProfileInput } from './participant-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class ParticipantCreateManyProfileInputEnvelope {

    @Field(() => [ParticipantCreateManyProfileInput], {nullable:false})
    @Type(() => ParticipantCreateManyProfileInput)
    data!: Array<ParticipantCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
