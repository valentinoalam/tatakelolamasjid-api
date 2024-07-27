import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailUpdateWithoutAccountInput } from './trial-balance-detail-update-without-account.input';

@InputType()
export class TrialBalanceDetailUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceDetailUpdateWithoutAccountInput, {nullable:false})
    @Type(() => TrialBalanceDetailUpdateWithoutAccountInput)
    data!: TrialBalanceDetailUpdateWithoutAccountInput;
}
