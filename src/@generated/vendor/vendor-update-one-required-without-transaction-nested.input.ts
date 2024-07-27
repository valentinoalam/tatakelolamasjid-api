import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VendorCreateWithoutTransactionInput } from './vendor-create-without-transaction.input';
import { Type } from 'class-transformer';
import { VendorCreateOrConnectWithoutTransactionInput } from './vendor-create-or-connect-without-transaction.input';
import { VendorUpsertWithoutTransactionInput } from './vendor-upsert-without-transaction.input';
import { Prisma } from '@prisma/client';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';
import { VendorUpdateToOneWithWhereWithoutTransactionInput } from './vendor-update-to-one-with-where-without-transaction.input';

@InputType()
export class VendorUpdateOneRequiredWithoutTransactionNestedInput {

    @Field(() => VendorCreateWithoutTransactionInput, {nullable:true})
    @Type(() => VendorCreateWithoutTransactionInput)
    create?: VendorCreateWithoutTransactionInput;

    @Field(() => VendorCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => VendorCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: VendorCreateOrConnectWithoutTransactionInput;

    @Field(() => VendorUpsertWithoutTransactionInput, {nullable:true})
    @Type(() => VendorUpsertWithoutTransactionInput)
    upsert?: VendorUpsertWithoutTransactionInput;

    @Field(() => VendorWhereUniqueInput, {nullable:true})
    @Type(() => VendorWhereUniqueInput)
    connect?: Prisma.AtLeast<VendorWhereUniqueInput, 'id'>;

    @Field(() => VendorUpdateToOneWithWhereWithoutTransactionInput, {nullable:true})
    @Type(() => VendorUpdateToOneWithWhereWithoutTransactionInput)
    update?: VendorUpdateToOneWithWhereWithoutTransactionInput;
}
