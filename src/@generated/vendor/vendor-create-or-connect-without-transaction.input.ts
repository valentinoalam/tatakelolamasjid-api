import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';
import { Type } from 'class-transformer';
import { VendorCreateWithoutTransactionInput } from './vendor-create-without-transaction.input';

@InputType()
export class VendorCreateOrConnectWithoutTransactionInput {

    @Field(() => VendorWhereUniqueInput, {nullable:false})
    @Type(() => VendorWhereUniqueInput)
    where!: Prisma.AtLeast<VendorWhereUniqueInput, 'id'>;

    @Field(() => VendorCreateWithoutTransactionInput, {nullable:false})
    @Type(() => VendorCreateWithoutTransactionInput)
    create!: VendorCreateWithoutTransactionInput;
}
