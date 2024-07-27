import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateWithoutAccountInput } from './trial-balance-detail-create-without-account.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateOrConnectWithoutAccountInput } from './trial-balance-detail-create-or-connect-without-account.input';
import { TrialBalanceDetailCreateManyAccountInputEnvelope } from './trial-balance-detail-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';

@InputType()
export class TrialBalanceDetailCreateNestedManyWithoutAccountInput {

    @Field(() => [TrialBalanceDetailCreateWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateWithoutAccountInput)
    create?: Array<TrialBalanceDetailCreateWithoutAccountInput>;

    @Field(() => [TrialBalanceDetailCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<TrialBalanceDetailCreateOrConnectWithoutAccountInput>;

    @Field(() => TrialBalanceDetailCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => TrialBalanceDetailCreateManyAccountInputEnvelope)
    createMany?: TrialBalanceDetailCreateManyAccountInputEnvelope;

    @Field(() => [TrialBalanceDetailWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>>;
}
