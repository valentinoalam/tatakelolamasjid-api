import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailWhereInput } from './trial-balance-detail-where.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailOrderByWithRelationInput } from './trial-balance-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrialBalanceDetailScalarFieldEnum } from './trial-balance-detail-scalar-field.enum';

@ArgsType()
export class FindManyTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailWhereInput, {nullable:true})
    @Type(() => TrialBalanceDetailWhereInput)
    where?: TrialBalanceDetailWhereInput;

    @Field(() => [TrialBalanceDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TrialBalanceDetailOrderByWithRelationInput>;

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TrialBalanceDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TrialBalanceDetailScalarFieldEnum>;
}
