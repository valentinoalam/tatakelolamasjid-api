import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberWhereInput } from './family-member-where.input';
import { Type } from 'class-transformer';
import { FamilyMemberOrderByWithAggregationInput } from './family-member-order-by-with-aggregation.input';
import { FamilyMemberScalarFieldEnum } from './family-member-scalar-field.enum';
import { FamilyMemberScalarWhereWithAggregatesInput } from './family-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FamilyMemberCountAggregateInput } from './family-member-count-aggregate.input';
import { FamilyMemberMinAggregateInput } from './family-member-min-aggregate.input';
import { FamilyMemberMaxAggregateInput } from './family-member-max-aggregate.input';

@ArgsType()
export class FamilyMemberGroupByArgs {

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    @Type(() => FamilyMemberWhereInput)
    where?: FamilyMemberWhereInput;

    @Field(() => [FamilyMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FamilyMemberOrderByWithAggregationInput>;

    @Field(() => [FamilyMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FamilyMemberScalarFieldEnum>;

    @Field(() => FamilyMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: FamilyMemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FamilyMemberCountAggregateInput, {nullable:true})
    _count?: FamilyMemberCountAggregateInput;

    @Field(() => FamilyMemberMinAggregateInput, {nullable:true})
    _min?: FamilyMemberMinAggregateInput;

    @Field(() => FamilyMemberMaxAggregateInput, {nullable:true})
    _max?: FamilyMemberMaxAggregateInput;
}
