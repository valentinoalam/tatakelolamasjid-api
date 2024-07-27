import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMemoArgs {

    @Field(() => MemoWhereUniqueInput, {nullable:false})
    @Type(() => MemoWhereUniqueInput)
    where!: Prisma.AtLeast<MemoWhereUniqueInput, 'id'>;
}
