import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyMemberCreateWithoutGuardianInput } from './family-member-create-without-guardian.input';
import { Type } from 'class-transformer';
import { FamilyMemberCreateOrConnectWithoutGuardianInput } from './family-member-create-or-connect-without-guardian.input';
import { FamilyMemberCreateManyGuardianInputEnvelope } from './family-member-create-many-guardian-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';

@InputType()
export class FamilyMemberUncheckedCreateNestedManyWithoutGuardianInput {

    @Field(() => [FamilyMemberCreateWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberCreateWithoutGuardianInput)
    create?: Array<FamilyMemberCreateWithoutGuardianInput>;

    @Field(() => [FamilyMemberCreateOrConnectWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberCreateOrConnectWithoutGuardianInput)
    connectOrCreate?: Array<FamilyMemberCreateOrConnectWithoutGuardianInput>;

    @Field(() => FamilyMemberCreateManyGuardianInputEnvelope, {nullable:true})
    @Type(() => FamilyMemberCreateManyGuardianInputEnvelope)
    createMany?: FamilyMemberCreateManyGuardianInputEnvelope;

    @Field(() => [FamilyMemberWhereUniqueInput], {nullable:true})
    @Type(() => FamilyMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>>;
}
