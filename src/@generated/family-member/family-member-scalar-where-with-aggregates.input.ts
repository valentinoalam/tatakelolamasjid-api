import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class FamilyMemberScalarWhereWithAggregatesInput {

    @Field(() => [FamilyMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FamilyMemberScalarWhereWithAggregatesInput>;

    @Field(() => [FamilyMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FamilyMemberScalarWhereWithAggregatesInput>;

    @Field(() => [FamilyMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FamilyMemberScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    participantId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    information?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    relationType?: StringWithAggregatesFilter;
}
