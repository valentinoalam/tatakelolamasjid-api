import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutChildrenInput } from './account-create-without-children.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutChildrenInput } from './account-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutChildrenInput {

    @Field(() => AccountCreateWithoutChildrenInput, {nullable:true})
    @Type(() => AccountCreateWithoutChildrenInput)
    create?: AccountCreateWithoutChildrenInput;

    @Field(() => AccountCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: AccountCreateOrConnectWithoutChildrenInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
