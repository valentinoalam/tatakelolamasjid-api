import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateWithoutTrialBalanceInput } from './trial-balance-detail-create-without-trial-balance.input';
import { Type } from 'class-transformer';
import { TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput } from './trial-balance-detail-create-or-connect-without-trial-balance.input';
import { TrialBalanceDetailUpsertWithWhereUniqueWithoutTrialBalanceInput } from './trial-balance-detail-upsert-with-where-unique-without-trial-balance.input';
import { TrialBalanceDetailCreateManyTrialBalanceInputEnvelope } from './trial-balance-detail-create-many-trial-balance-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TrialBalanceDetailWhereUniqueInput } from './trial-balance-detail-where-unique.input';
import { TrialBalanceDetailUpdateWithWhereUniqueWithoutTrialBalanceInput } from './trial-balance-detail-update-with-where-unique-without-trial-balance.input';
import { TrialBalanceDetailUpdateManyWithWhereWithoutTrialBalanceInput } from './trial-balance-detail-update-many-with-where-without-trial-balance.input';
import { TrialBalanceDetailScalarWhereInput } from './trial-balance-detail-scalar-where.input';

@InputType()
export class TrialBalanceDetailUncheckedUpdateManyWithoutTrialBalanceNestedInput {

    @Field(() => [TrialBalanceDetailCreateWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateWithoutTrialBalanceInput)
    create?: Array<TrialBalanceDetailCreateWithoutTrialBalanceInput>;

    @Field(() => [TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput)
    connectOrCreate?: Array<TrialBalanceDetailCreateOrConnectWithoutTrialBalanceInput>;

    @Field(() => [TrialBalanceDetailUpsertWithWhereUniqueWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailUpsertWithWhereUniqueWithoutTrialBalanceInput)
    upsert?: Array<TrialBalanceDetailUpsertWithWhereUniqueWithoutTrialBalanceInput>;

    @Field(() => TrialBalanceDetailCreateManyTrialBalanceInputEnvelope, {nullable:true})
    @Type(() => TrialBalanceDetailCreateManyTrialBalanceInputEnvelope)
    createMany?: TrialBalanceDetailCreateManyTrialBalanceInputEnvelope;

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

    @Field(() => [TrialBalanceDetailUpdateWithWhereUniqueWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailUpdateWithWhereUniqueWithoutTrialBalanceInput)
    update?: Array<TrialBalanceDetailUpdateWithWhereUniqueWithoutTrialBalanceInput>;

    @Field(() => [TrialBalanceDetailUpdateManyWithWhereWithoutTrialBalanceInput], {nullable:true})
    @Type(() => TrialBalanceDetailUpdateManyWithWhereWithoutTrialBalanceInput)
    updateMany?: Array<TrialBalanceDetailUpdateManyWithWhereWithoutTrialBalanceInput>;

    @Field(() => [TrialBalanceDetailScalarWhereInput], {nullable:true})
    @Type(() => TrialBalanceDetailScalarWhereInput)
    deleteMany?: Array<TrialBalanceDetailScalarWhereInput>;
}
