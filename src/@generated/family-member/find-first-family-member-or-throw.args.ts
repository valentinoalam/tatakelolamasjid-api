import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberWhereInput } from './family-member-where.input';
import { Type } from 'class-transformer';
import { FamilyMemberOrderByWithRelationInput } from './family-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FamilyMemberScalarFieldEnum } from './family-member-scalar-field.enum';

@ArgsType()
export class FindFirstFamilyMemberOrThrowArgs {

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    @Type(() => FamilyMemberWhereInput)
    where?: FamilyMemberWhereInput;

    @Field(() => [FamilyMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FamilyMemberOrderByWithRelationInput>;

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FamilyMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FamilyMemberScalarFieldEnum>;
}
