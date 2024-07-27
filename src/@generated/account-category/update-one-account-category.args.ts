import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryUpdateInput } from './account-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AccountCategoryWhereUniqueInput } from './account-category-where-unique.input';

@ArgsType()
export class UpdateOneAccountCategoryArgs {

    @Field(() => AccountCategoryUpdateInput, {nullable:false})
    @Type(() => AccountCategoryUpdateInput)
    data!: AccountCategoryUpdateInput;

    @Field(() => AccountCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AccountCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<AccountCategoryWhereUniqueInput, 'id'>;
}
