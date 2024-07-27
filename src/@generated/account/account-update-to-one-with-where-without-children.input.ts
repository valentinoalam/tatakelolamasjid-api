import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutChildrenInput } from './account-update-without-children.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => AccountUpdateWithoutChildrenInput)
    data!: AccountUpdateWithoutChildrenInput;
}
