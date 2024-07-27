import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTrialBalanceDetailArgs {

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;
}
