import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateWithoutAccountInput } from './trial-balance-detail-create-without-account.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateOrConnectWithoutAccountInput } from './trial-balance-detail-create-or-connect-without-account.input';
import { TrialBalanceDetailUpsertWithWhereUniqueWithoutAccountInput } from './trial-balance-detail-upsert-with-where-unique-without-account.input';
import { TrialBalanceDetailCreateManyAccountInputEnvelope } from './trial-balance-detail-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { TrialBalanceDetailUpdateWithWhereUniqueWithoutAccountInput } from './trial-balance-detail-update-with-where-unique-without-account.input';
import { TrialBalanceDetailUpdateManyWithWhereWithoutAccountInput } from './trial-balance-detail-update-many-with-where-without-account.input';
import { TrialBalanceDetailScalarWhereInput } from './trial-balance-detail-scalar-where.input';

@InputType()
export class TrialBalanceDetailUpdateManyWithoutAccountNestedInput {

    @Field(() => [TrialBalanceDetailCreateWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateWithoutAccountInput)
    create?: Array<TrialBalanceDetailCreateWithoutAccountInput>;

    @Field(() => [TrialBalanceDetailCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<TrialBalanceDetailCreateOrConnectWithoutAccountInput>;

    @Field(() => [TrialBalanceDetailUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<TrialBalanceDetailUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => TrialBalanceDetailCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => TrialBalanceDetailCreateManyAccountInputEnvelope)
    createMany?: TrialBalanceDetailCreateManyAccountInputEnvelope;

    @Field(() => [TrialBalanceDetailWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceDetailWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceDetailWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceDetailWhereUniqueInput], {nullable:true})
    @Type(() => TrialBalanceDetailWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TrialBalanceDetailWhereUniqueInput, 'id'>>;

    @Field(() => [TrialBalanceDetailUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<TrialBalanceDetailUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [TrialBalanceDetailUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => TrialBalanceDetailUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<TrialBalanceDetailUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [TrialBalanceDetailScalarWhereInput], {nullable:true})
    @Type(() => TrialBalanceDetailScalarWhereInput)
    deleteMany?: Array<TrialBalanceDetailScalarWhereInput>;
}
