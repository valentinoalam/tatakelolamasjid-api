import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateWithoutAccountInput } from './trial-balance-detail-create-without-account.input';

@InputType()
export class TrialBalanceDetailCreateOrConnectWithoutAccountInput {

    @Field(() => TrialBalanceDetailWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceDetailCreateWithoutAccountInput, {nullable:false})
    @Type(() => TrialBalanceDetailCreateWithoutAccountInput)
    create!: TrialBalanceDetailCreateWithoutAccountInput;
}
