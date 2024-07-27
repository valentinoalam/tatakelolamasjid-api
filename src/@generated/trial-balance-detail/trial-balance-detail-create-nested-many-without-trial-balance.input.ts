import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateWithoutTrialBalanceInput } from './trial-balance-detail-create-without-trial-balance.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput } from './trial-balance-detail-create-or-connect-without-trial-balance.input';
import { TrialBalanceDetailCreateManyTrialBalanceInputEnvelope } from './trial-balance-detail-create-many-trial-balance-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';

@InputType()
export class TrialBalanceDetailCreateNestedManyWithoutTrialBalanceInput {

    @Field(() => [TrialBalanceDetailCreateWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateWithoutTrialBalanceInput)
    create?: Array<TrialBalanceDetailCreateWithoutTrialBalanceInput>;

    @Field(() => [TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput)
    connectOrCreate?: Array<TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput>;

    @Field(() => TrialBalanceDetailCreateManyTrialBalanceInputEnvelope, {nullable:true})
    @Type(() => TrialBalanceDetailCreateManyTrialBalanceInputEnvelope)
    createMany?: TrialBalanceDetailCreateManyTrialBalanceInputEnvelope;

    @Field(() => [TrialBalanceDetailWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>>;
}
