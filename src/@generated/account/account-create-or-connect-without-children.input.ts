import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutChildrenInput } from './account-create-without-children.input';

@InputType()
export class AccountCreateOrConnectWithoutChildrenInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutChildrenInput, {nullable:false})
    @Type(() => AccountCreateWithoutChildrenInput)
    create!: AccountCreateWithoutChildrenInput;
}
