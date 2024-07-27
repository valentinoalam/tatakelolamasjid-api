import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateInput } from './trial-balance-detail-create.input';
import { TrialBalanceDetailUpdateInput } from './trial-balance-detail-update.input';

@ArgsType()
export class UpsertOneTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceDetailCreateInput, {nullable:false})
    @Type(() => TrialBalanceDetailCreateInput)
    create!: TrialBalanceDetailCreateInput;

    @Field(() => TrialBalanceDetailUpdateInput, {nullable:false})
    @Type(() => TrialBalanceDetailUpdateInput)
    update!: TrialBalanceDetailUpdateInput;
}
