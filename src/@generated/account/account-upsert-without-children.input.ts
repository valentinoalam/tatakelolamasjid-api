import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutChildrenInput } from './account-update-without-children.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutChildrenInput } from './account-create-without-children.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutChildrenInput {

    @Field(() => AccountUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => AccountUpdateWithoutChildrenInput)
    update!: AccountUpdateWithoutChildrenInput;

    @Field(() => AccountCreateWithoutChildrenInput, {nullable:false})
    @Type(() => AccountCreateWithoutChildrenInput)
    create!: AccountCreateWithoutChildrenInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
