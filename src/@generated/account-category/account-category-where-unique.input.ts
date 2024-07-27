import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCategoryWhereInput } from './account-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class AccountCategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AccountCategoryWhereInput], {nullable:true})
    AND?: Array<AccountCategoryWhereInput>;

    @Field(() => [AccountCategoryWhereInput], {nullable:true})
    OR?: Array<AccountCategoryWhereInput>;

    @Field(() => [AccountCategoryWhereInput], {nullable:true})
    NOT?: Array<AccountCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
