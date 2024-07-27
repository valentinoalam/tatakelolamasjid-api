import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberUpdateInput } from './family-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';

@ArgsType()
export class UpdateOneFamilyMemberArgs {

    @Field(() => FamilyMemberUpdateInput, {nullable:false})
    @Type(() => FamilyMemberUpdateInput)
    data!: FamilyMemberUpdateInput;

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:false})
    @Type(() => FamilyMemberWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;
}
