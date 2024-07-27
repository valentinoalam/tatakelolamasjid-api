import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutParentInput } from './account-create-without-parent.input';

@InputType()
export class AccountCreateOrConnectWithoutParentInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutParentInput, {nullable:false})
    @Type(() => AccountCreateWithoutParentInput)
    create!: AccountCreateWithoutParentInput;
}
