import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantWhereInput } from './participant-where.input';

@InputType()
export class ParticipantRelationFilter {

    @Field(() => ParticipantWhereInput, {nullable:true})
    is?: ParticipantWhereInput;

    @Field(() => ParticipantWhereInput, {nullable:true})
    isNot?: ParticipantWhereInput;
}
