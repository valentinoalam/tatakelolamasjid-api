import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FamilyMemberScalarWhereInput {

    @Field(() => [FamilyMemberScalarWhereInput], {nullable:true})
    AND?: Array<FamilyMemberScalarWhereInput>;

    @Field(() => [FamilyMemberScalarWhereInput], {nullable:true})
    OR?: Array<FamilyMemberScalarWhereInput>;

    @Field(() => [FamilyMemberScalarWhereInput], {nullable:true})
    NOT?: Array<FamilyMemberScalarWhereInput>;

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
}
