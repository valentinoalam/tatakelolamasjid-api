import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemoWhereInput } from './memo-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class MemoWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [MemoWhereInput], {nullable:true})
    AND?: Array<MemoWhereInput>;

    @Field(() => [MemoWhereInput], {nullable:true})
    OR?: Array<MemoWhereInput>;

    @Field(() => [MemoWhereInput], {nullable:true})
    NOT?: Array<MemoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_done?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
