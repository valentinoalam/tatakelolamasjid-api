import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyMemberWhereInput } from './family-member-where.input';

@InputType()
export class FamilyMemberListRelationFilter {

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    every?: FamilyMemberWhereInput;

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    some?: FamilyMemberWhereInput;

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    none?: FamilyMemberWhereInput;
}
