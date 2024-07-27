import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ParticipantOrderByWithRelationInput } from '../participant/participant-order-by-with-relation.input';

@InputType()
export class FamilyMemberOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    information?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relationType?: keyof typeof SortOrder;

    @Field(() => ParticipantOrderByWithRelationInput, {nullable:true})
    guardian?: ParticipantOrderByWithRelationInput;
}
