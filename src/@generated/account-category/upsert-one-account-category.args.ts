import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountCategoryWhereUniqueInput } from './account-category-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCategoryCreateInput } from './account-category-create.input';
import { AccountCategoryUpdateInput } from './account-category-update.input';

@ArgsType()
export class UpsertOneAccountCategoryArgs {

    @Field(() => AccountCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AccountCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<AccountCategoryWhereUniqueInput, 'id'>;

    @Field(() => AccountCategoryCreateInput, {nullable:false})
    @Type(() => AccountCategoryCreateInput)
    create!: AccountCategoryCreateInput;

    @Field(() => AccountCategoryUpdateInput, {nullable:false})
    @Type(() => AccountCategoryUpdateInput)
    update!: AccountCategoryUpdateInput;
}
