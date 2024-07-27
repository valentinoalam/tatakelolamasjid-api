import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyMemberCreateWithoutGuardianInput } from './family-member-create-without-guardian.input';
import { Type } from 'class-transformer';
import { FamilyMemberCreateOrConnectWithoutGuardianInput } from './family-member-create-or-connect-without-guardian.input';
import { FamilyMemberUpsertWithWhereUniqueWithoutGuardianInput } from './family-member-upsert-with-where-unique-without-guardian.input';
import { FamilyMemberCreateManyGuardianInputEnvelope } from './family-member-create-many-guardian-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FamilyMemberWhereUniqueInput } from './family-member-where-unique.input';
import { FamilyMemberUpdateWithWhereUniqueWithoutGuardianInput } from './family-member-update-with-where-unique-without-guardian.input';
import { FamilyMemberUpdateManyWithWhereWithoutGuardianInput } from './family-member-update-many-with-where-without-guardian.input';
import { FamilyMemberScalarWhereInput } from './family-member-scalar-where.input';

@InputType()
export class FamilyMemberUncheckedUpdateManyWithoutGuardianNestedInput {

    @Field(() => [FamilyMemberCreateWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberCreateWithoutGuardianInput)
    create?: Array<FamilyMemberCreateWithoutGuardianInput>;

    @Field(() => [FamilyMemberCreateOrConnectWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberCreateOrConnectWithoutGuardianInput)
    connectOrCreate?: Array<FamilyMemberCreateOrConnectWithoutGuardianInput>;

    @Field(() => [FamilyMemberUpsertWithWhereUniqueWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberUpsertWithWhereUniqueWithoutGuardianInput)
    upsert?: Array<FamilyMemberUpsertWithWhereUniqueWithoutGuardianInput>;

    @Field(() => FamilyMemberCreateManyGuardianInputEnvelope, {nullable:true})
    @Type(() => FamilyMemberCreateManyGuardianInputEnvelope)
    createMany?: FamilyMemberCreateManyGuardianInputEnvelope;

    @Field(() => [FamilyMemberWhereUniqueInput], {nullable:true})
    @Type(() => FamilyMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>>;

    @Field(() => [FamilyMemberWhereUniqueInput], {nullable:true})
    @Type(() => FamilyMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>>;

    @Field(() => [FamilyMemberWhereUniqueInput], {nullable:true})
    @Type(() => FamilyMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>>;

    @Field(() => [FamilyMemberWhereUniqueInput], {nullable:true})
    @Type(() => FamilyMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FamilyMemberWhereUniqueInput, 'id'>>;

    @Field(() => [FamilyMemberUpdateWithWhereUniqueWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberUpdateWithWhereUniqueWithoutGuardianInput)
    update?: Array<FamilyMemberUpdateWithWhereUniqueWithoutGuardianInput>;

    @Field(() => [FamilyMemberUpdateManyWithWhereWithoutGuardianInput], {nullable:true})
    @Type(() => FamilyMemberUpdateManyWithWhereWithoutGuardianInput)
    updateMany?: Array<FamilyMemberUpdateManyWithWhereWithoutGuardianInput>;

    @Field(() => [FamilyMemberScalarWhereInput], {nullable:true})
    @Type(() => FamilyMemberScalarWhereInput)
    deleteMany?: Array<FamilyMemberScalarWhereInput>;
}
