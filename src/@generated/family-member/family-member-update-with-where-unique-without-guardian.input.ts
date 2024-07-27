import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyMemberUpdateWithoutGuardianInput } from './family-member-update-without-guardian.input';

@InputType()
export class FamilyMemberUpdateWithWhereUniqueWithoutGuardianInput {

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:false})
    @Type(() => FamilyMemberWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;

    @Field(() => FamilyMemberUpdateWithoutGuardianInput, {nullable:false})
    @Type(() => FamilyMemberUpdateWithoutGuardianInput)
    data!: FamilyMemberUpdateWithoutGuardianInput;
}
