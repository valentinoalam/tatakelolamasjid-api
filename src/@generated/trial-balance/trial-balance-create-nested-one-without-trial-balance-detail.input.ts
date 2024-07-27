import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceCreateWithoutTrialBalanceDetailInput } from './trial-balance-create-without-trial-balance-detail.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateOrConnectWithoutTrialBalanceDetailInput } from './trial-balance-create-or-connect-without-trial-balance-detail.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';

@InputType()
export class TrialBalanceCreateNestedOneWithoutTrialBalanceDetailInput {

    @Field(() => TrialBalanceCreateWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => TrialBalanceCreateWithoutTrialBalanceDetailInput)
    create?: TrialBalanceCreateWithoutTrialBalanceDetailInput;

    @Field(() => TrialBalanceCreateOrConnectWithoutTrialBalanceDetailInput, {nullable:true})
    @Type(() => TrialBalanceCreateOrConnectWithoutTrialBalanceDetailInput)
    connectOrCreate?: TrialBalanceCreateOrConnectWithoutTrialBalanceDetailInput;

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:true})
    @Type(() => TrialBalanceWhereUniqueInput)
    connect?: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;
}
