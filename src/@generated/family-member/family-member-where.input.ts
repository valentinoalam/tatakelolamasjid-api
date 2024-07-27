import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ParticipantRelationFilter } from '../participant/participant-relation-filter.input';

@InputType()
export class FamilyMemberWhereInput {

    @Field(() => [FamilyMemberWhereInput], {nullable:true})
    AND?: Array<FamilyMemberWhereInput>;

    @Field(() => [FamilyMemberWhereInput], {nullable:true})
    OR?: Array<FamilyMemberWhereInput>;

    @Field(() => [FamilyMemberWhereInput], {nullable:true})
    NOT?: Array<FamilyMemberWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    participantId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    information?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    relationType?: StringFilter;

    @Field(() => ParticipantRelationFilter, {nullable:true})
    guardian?: ParticipantRelationFilter;
}
