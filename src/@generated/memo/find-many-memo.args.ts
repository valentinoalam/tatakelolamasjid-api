import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoWhereInput } from './memo-where.input';
import { Type } from 'class-transformer';
import { MemoOrderByWithRelationInput } from './memo-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemoScalarFieldEnum } from './memo-scalar-field.enum';

@ArgsType()
export class FindManyMemoArgs {

    @Field(() => MemoWhereInput, {nullable:true})
    @Type(() => MemoWhereInput)
    where?: MemoWhereInput;

    @Field(() => [MemoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemoOrderByWithRelationInput>;

    @Field(() => MemoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MemoWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MemoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MemoScalarFieldEnum>;
}
