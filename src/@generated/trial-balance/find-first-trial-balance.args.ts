import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceOrderByWithRelationInput } from './trial-balance-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrialBalanceScalarFieldEnum } from './trial-balance-scalar-field.enum';

@ArgsType()
export class FindFirstTrialBalanceArgs {

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    @Type(() => TrialBalanceWhereInput)
    where?: TrialBalanceWhereInput;

    @Field(() => [TrialBalanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TrialBalanceOrderByWithRelationInput>;

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TrialBalanceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TrialBalanceScalarFieldEnum>;
}
