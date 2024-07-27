import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantWhereInput } from './participant-where.input';

@InputType()
export class ParticipantListRelationFilter {

    @Field(() => ParticipantWhereInput, {nullable:true})
    every?: ParticipantWhereInput;

    @Field(() => ParticipantWhereInput, {nullable:true})
    some?: ParticipantWhereInput;

    @Field(() => ParticipantWhereInput, {nullable:true})
    none?: ParticipantWhereInput;
}
