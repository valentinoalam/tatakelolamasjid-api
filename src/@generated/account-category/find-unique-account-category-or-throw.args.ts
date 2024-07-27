import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountCategoryWhereUniqueInput } from './account-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAccountCategoryOrThrowArgs {

    @Field(() => AccountCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AccountCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<AccountCategoryWhereUniqueInput, 'id'>;
}
