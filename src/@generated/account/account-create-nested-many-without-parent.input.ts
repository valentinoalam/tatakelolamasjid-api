import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutParentInput } from './account-create-without-parent.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutParentInput } from './account-create-or-connect-without-parent.input';
import { AccountCreateManyParentInputEnvelope } from './account-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedManyWithoutParentInput {

    @Field(() => [AccountCreateWithoutParentInput], {nullable:true})
    @Type(() => AccountCreateWithoutParentInput)
    create?: Array<AccountCreateWithoutParentInput>;

    @Field(() => [AccountCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutParentInput>;

    @Field(() => AccountCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyParentInputEnvelope)
    createMany?: AccountCreateManyParentInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
