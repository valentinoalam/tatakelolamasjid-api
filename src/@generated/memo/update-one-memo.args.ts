import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoUpdateInput } from './memo-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';

@ArgsType()
export class UpdateOneMemoArgs {

    @Field(() => MemoUpdateInput, {nullable:false})
    @Type(() => MemoUpdateInput)
    data!: MemoUpdateInput;

    @Field(() => MemoWhereUniqueInput, {nullable:false})
    @Type(() => MemoWhereUniqueInput)
    where!: Prisma.AtLeast<MemoWhereUniqueInput, 'id'>;
}
