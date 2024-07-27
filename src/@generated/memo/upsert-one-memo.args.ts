import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';
import { Type } from 'class-transformer';
import { MemoCreateInput } from './memo-create.input';
import { MemoUpdateInput } from './memo-update.input';

@ArgsType()
export class UpsertOneMemoArgs {

    @Field(() => MemoWhereUniqueInput, {nullable:false})
    @Type(() => MemoWhereUniqueInput)
    where!: Prisma.AtLeast<MemoWhereUniqueInput, 'id'>;

    @Field(() => MemoCreateInput, {nullable:false})
    @Type(() => MemoCreateInput)
    create!: MemoCreateInput;

    @Field(() => MemoUpdateInput, {nullable:false})
    @Type(() => MemoUpdateInput)
    update!: MemoUpdateInput;
}
