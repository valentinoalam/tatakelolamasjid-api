import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutPaymentMethodInput } from './transaction-create-without-payment-method.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutPaymentMethodInput } from './transaction-create-or-connect-without-payment-method.input';
import { TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput } from './transaction-upsert-with-where-unique-without-payment-method.input';
import { TransactionCreateManyPaymentMethodInputEnvelope } from './transaction-create-many-payment-method-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput } from './transaction-update-with-where-unique-without-payment-method.input';
import { TransactionUpdateManyWithWhereWithoutPaymentMethodInput } from './transaction-update-many-with-where-without-payment-method.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutPaymentMethodNestedInput {

    @Field(() => [TransactionCreateWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionCreateWithoutPaymentMethodInput)
    create?: Array<TransactionCreateWithoutPaymentMethodInput>;

    @Field(() => [TransactionCreateOrConnectWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutPaymentMethodInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutPaymentMethodInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput>;

    @Field(() => TransactionCreateManyPaymentMethodInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyPaymentMethodInputEnvelope)
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutPaymentMethodInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutPaymentMethodInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
