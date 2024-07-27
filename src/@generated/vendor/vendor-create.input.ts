import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateNestedManyWithoutVendorInput } from '../transaction/transaction-create-nested-many-without-vendor.input';

@InputType()
export class VendorCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    businessField!: string;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TransactionCreateNestedManyWithoutVendorInput, {nullable:true})
    transaction?: TransactionCreateNestedManyWithoutVendorInput;
}
