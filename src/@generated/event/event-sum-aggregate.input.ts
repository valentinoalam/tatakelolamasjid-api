import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quota?: true;
}
