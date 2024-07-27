import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateWithoutTrialBalanceDetailInput } from './trial-balance-create-without-trial-balance-detail.input';

@InputType()
export class TrialBalanceCreateOrConnectWithoutTrialBalanceDetailInput {

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceCreateWithoutTrialBalanceDetailInput, {nullable:false})
    @Type(() => TrialBalanceCreateWithoutTrialBalanceDetailInput)
    create!: TrialBalanceCreateWithoutTrialBalanceDetailInput;
}
