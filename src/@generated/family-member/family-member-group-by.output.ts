import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FamilyMemberCountAggregate } from './family-member-count-aggregate.output';
import { FamilyMemberMinAggregate } from './family-member-min-aggregate.output';
import { FamilyMemberMaxAggregate } from './family-member-max-aggregate.output';

@ObjectType()
export class FamilyMemberGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    participantId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    information!: string;

    @Field(() => String, {nullable:false})
    relationType!: string;

    @Field(() => FamilyMemberCountAggregate, {nullable:true})
    _count?: FamilyMemberCountAggregate;

    @Field(() => FamilyMemberMinAggregate, {nullable:true})
    _min?: FamilyMemberMinAggregate;

    @Field(() => FamilyMemberMaxAggregate, {nullable:true})
    _max?: FamilyMemberMaxAggregate;
}
