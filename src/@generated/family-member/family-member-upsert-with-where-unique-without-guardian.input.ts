import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyMemberUpdateWithoutGuardianInput } from './family-member-update-without-guardian.input';
import { FamilyMemberCreateWithoutGuardianInput } from './family-member-create-without-guardian.input';

@InputType()
export class FamilyMemberUpsertWithWhereUniqueWithoutGuardianInput {

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:false})
    @Type(() => FamilyMemberWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;

    @Field(() => FamilyMemberUpdateWithoutGuardianInput, {nullable:false})
    @Type(() => FamilyMemberUpdateWithoutGuardianInput)
    update!: FamilyMemberUpdateWithoutGuardianInput;

    @Field(() => FamilyMemberCreateWithoutGuardianInput, {nullable:false})
    @Type(() => FamilyMemberCreateWithoutGuardianInput)
    create!: FamilyMemberCreateWithoutGuardianInput;
}
