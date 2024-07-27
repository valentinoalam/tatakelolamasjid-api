import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VendorUpdateWithoutTransactionInput } from './vendor-update-without-transaction.input';
import { Type } from 'class-transformer';
import { VendorCreateWithoutTransactionInput } from './vendor-create-without-transaction.input';
import { VendorWhereInput } from './vendor-where.input';

@InputType()
export class VendorUpsertWithoutTransactionInput {

    @Field(() => VendorUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => VendorUpdateWithoutTransactionInput)
    update!: VendorUpdateWithoutTransactionInput;

    @Field(() => VendorCreateWithoutTransactionInput, {nullable:false})
    @Type(() => VendorCreateWithoutTransactionInput)
    create!: VendorCreateWithoutTransactionInput;

    @Field(() => VendorWhereInput, {nullable:true})
    @Type(() => VendorWhereInput)
    where?: VendorWhereInput;
}
