import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyMemberCreateInput } from './family-member-create.input';
import { FamilyMemberUpdateInput } from './family-member-update.input';

@ArgsType()
export class UpsertOneFamilyMemberArgs {

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:false})
    @Type(() => FamilyMemberWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;

    @Field(() => FamilyMemberCreateInput, {nullable:false})
    @Type(() => FamilyMemberCreateInput)
    create!: FamilyMemberCreateInput;

    @Field(() => FamilyMemberUpdateInput, {nullable:false})
    @Type(() => FamilyMemberUpdateInput)
    update!: FamilyMemberUpdateInput;
}
