import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventCount {

    @Field(() => Int, {nullable:false})
    participant?: number;

    @Field(() => Int, {nullable:false})
    crews?: number;

    @Field(() => Int, {nullable:false})
    speakers?: number;
}
