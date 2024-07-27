import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutChildrenInput } from './account-create-without-children.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutChildrenInput } from './account-create-or-connect-without-children.input';
import { AccountUpsertWithoutChildrenInput } from './account-upsert-without-children.input';
import { AccountWhereInput } from './account-where.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutChildrenInput } from './account-update-to-one-with-where-without-children.input';

@InputType()
export class AccountUpdateOneWithoutChildrenNestedInput {

    @Field(() => AccountCreateWithoutChildrenInput, {nullable:true})
    @Type(() => AccountCreateWithoutChildrenInput)
    create?: AccountCreateWithoutChildrenInput;

    @Field(() => AccountCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: AccountCreateOrConnectWithoutChildrenInput;

    @Field(() => AccountUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => AccountUpsertWithoutChildrenInput)
    upsert?: AccountUpsertWithoutChildrenInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    disconnect?: AccountWhereInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    delete?: AccountWhereInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutChildrenInput)
    update?: AccountUpdateToOneWithWhereWithoutChildrenInput;
}
