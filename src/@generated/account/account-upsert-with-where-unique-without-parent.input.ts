import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutParentInput } from './account-update-without-parent.input';
import { AccountCreateWithoutParentInput } from './account-create-without-parent.input';

@InputType()
export class AccountUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateWithoutParentInput, {nullable:false})
    @Type(() => AccountUpdateWithoutParentInput)
    update!: AccountUpdateWithoutParentInput;

    @Field(() => AccountCreateWithoutParentInput, {nullable:false})
    @Type(() => AccountCreateWithoutParentInput)
    create!: AccountCreateWithoutParentInput;
}
