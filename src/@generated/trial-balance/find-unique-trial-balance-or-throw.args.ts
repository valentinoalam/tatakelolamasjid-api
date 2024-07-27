import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTrialBalanceOrThrowArgs {

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;
}
