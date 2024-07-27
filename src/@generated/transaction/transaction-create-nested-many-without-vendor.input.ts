import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutVendorInput } from './transaction-create-without-vendor.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutVendorInput } from './transaction-create-or-connect-without-vendor.input';
import { TransactionCreateManyVendorInputEnvelope } from './transaction-create-many-vendor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionCreateNestedManyWithoutVendorInput {

    @Field(() => [TransactionCreateWithoutVendorInput], {nullable:true})
    @Type(() => TransactionCreateWithoutVendorInput)
    create?: Array<TransactionCreateWithoutVendorInput>;

    @Field(() => [TransactionCreateOrConnectWithoutVendorInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutVendorInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutVendorInput>;

    @Field(() => TransactionCreateManyVendorInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyVendorInputEnvelope)
    createMany?: TransactionCreateManyVendorInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
}
