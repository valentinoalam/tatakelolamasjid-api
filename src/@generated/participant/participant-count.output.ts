import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ParticipantCount {

    @Field(() => Int, {nullable:false})
    member?: number;
}
