import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventSumAggregate {

    @Field(() => Int, {nullable:true})
    quota?: number;
}
