import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutParentInput } from './account-create-without-parent.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutParentInput } from './account-create-or-connect-without-parent.input';
import { AccountUpsertWithWhereUniqueWithoutParentInput } from './account-upsert-with-where-unique-without-parent.input';
import { AccountCreateManyParentInputEnvelope } from './account-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithWhereUniqueWithoutParentInput } from './account-update-with-where-unique-without-parent.input';
import { AccountUpdateManyWithWhereWithoutParentInput } from './account-update-many-with-where-without-parent.input';
import { AccountScalarWhereInput } from './account-scalar-where.input';

@InputType()
export class AccountUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [AccountCreateWithoutParentInput], {nullable:true})
    @Type(() => AccountCreateWithoutParentInput)
    create?: Array<AccountCreateWithoutParentInput>;

    @Field(() => [AccountCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutParentInput>;

    @Field(() => [AccountUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => AccountCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyParentInputEnvelope)
    createMany?: AccountCreateManyParentInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;

    @Field(() => [AccountUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [AccountUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}
