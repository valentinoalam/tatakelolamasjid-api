import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutVendorInput } from './transaction-update-without-vendor.input';
import { TransactionCreateWithoutVendorInput } from './transaction-create-without-vendor.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutVendorInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionUpdateWithoutVendorInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutVendorInput)
    update!: TransactionUpdateWithoutVendorInput;

    @Field(() => TransactionCreateWithoutVendorInput, {nullable:false})
    @Type(() => TransactionCreateWithoutVendorInput)
    create!: TransactionCreateWithoutVendorInput;
}
