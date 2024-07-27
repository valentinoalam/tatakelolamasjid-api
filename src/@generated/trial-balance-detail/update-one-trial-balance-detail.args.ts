import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailUpdateInput } from './trial-balance-detail-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';

@ArgsType()
export class UpdateOneTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailUpdateInput, {nullable:false})
    @Type(() => TrialBalanceDetailUpdateInput)
    data!: TrialBalanceDetailUpdateInput;

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;
}
