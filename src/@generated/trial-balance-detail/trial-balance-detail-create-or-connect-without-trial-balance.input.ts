import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateWithoutTrialBalanceInput } from './trial-balance-detail-create-without-trial-balance.input';

@InputType()
export class TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput {

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceDetailCreateWithoutTrialBalanceInput, {nullable:false})
    @Type(() => TrialBalanceDetailCreateWithoutTrialBalanceInput)
    create!: TrialBalanceDetailCreateWithoutTrialBalanceInput;
}
