import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutVendorInput } from './transaction-create-without-vendor.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutVendorInput } from './transaction-create-or-connect-without-vendor.input';
import { TransactionUpsertWithWhereUniqueWithoutVendorInput } from './transaction-upsert-with-where-unique-without-vendor.input';
import { TransactionCreateManyVendorInputEnvelope } from './transaction-create-many-vendor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutVendorInput } from './transaction-update-with-where-unique-without-vendor.input';
import { TransactionUpdateManyWithWhereWithoutVendorInput } from './transaction-update-many-with-where-without-vendor.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutVendorNestedInput {

    @Field(() => [TransactionCreateWithoutVendorInput], {nullable:true})
    @Type(() => TransactionCreateWithoutVendorInput)
    create?: Array<TransactionCreateWithoutVendorInput>;

    @Field(() => [TransactionCreateOrConnectWithoutVendorInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutVendorInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutVendorInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutVendorInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutVendorInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutVendorInput>;

    @Field(() => TransactionCreateManyVendorInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyVendorInputEnvelope)
    createMany?: TransactionCreateManyVendorInputEnvelope;

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

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutVendorInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutVendorInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutVendorInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutVendorInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutVendorInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutVendorInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
