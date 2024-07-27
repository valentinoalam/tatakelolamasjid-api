import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventNullableRelationFilter {

    @Field(() => EventWhereInput, {nullable:true})
    is?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    isNot?: EventWhereInput;
}
