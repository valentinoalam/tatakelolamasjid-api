import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFamilyMemberArgs {

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:false})
    @Type(() => FamilyMemberWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;
}
