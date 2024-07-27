import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FamilyMemberCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    participantId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    information?: true;

    @Field(() => Boolean, {nullable:true})
    relationType?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
