import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Participant } from '../participant/participant.model';

@ObjectType()
export class FamilyMember {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    participantId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    information!: string;

    @Field(() => String, {nullable:false})
    relationType!: string;

    @Field(() => Participant, {nullable:false})
    guardian?: Participant;
}
