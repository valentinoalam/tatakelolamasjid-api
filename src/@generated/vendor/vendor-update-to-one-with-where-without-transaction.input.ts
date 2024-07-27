import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VendorWhereInput } from './vendor-where.input';
import { Type } from 'class-transformer';
import { VendorUpdateWithoutTransactionInput } from './vendor-update-without-transaction.input';

@InputType()
export class VendorUpdateToOneWithWhereWithoutTransactionInput {

    @Field(() => VendorWhereInput, {nullable:true})
    @Type(() => VendorWhereInput)
    where?: VendorWhereInput;

    @Field(() => VendorUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => VendorUpdateWithoutTransactionInput)
    data!: VendorUpdateWithoutTransactionInput;
}
