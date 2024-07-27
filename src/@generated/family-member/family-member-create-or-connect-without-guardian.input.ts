import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyMemberCreateWithoutGuardianInput } from './family-member-create-without-guardian.input';

@InputType()
export class FamilyMemberCreateOrConnectWithoutGuardianInput {

    @Field(() => FamilyMemberWhereUniqueInput, {nullable:false})
    @Type(() => FamilyMemberWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>;

    @Field(() => FamilyMemberCreateWithoutGuardianInput, {nullable:false})
    @Type(() => FamilyMemberCreateWithoutGuardianInput)
    create!: FamilyMemberCreateWithoutGuardianInput;
}
