import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { Int } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { Vendor } from '../vendor/vendor.model';
import { PaymentMethod } from '../payment-method/payment-method.model';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    accountId!: string;

    @Field(() => String, {nullable:false})
    vendorId!: string;

    @Field(() => String, {nullable:false})
    paymentMethodId!: string;

    @Field(() => TransactionType, {nullable:false})
    type!: keyof typeof TransactionType;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => Date, {nullable:false})
    dtTrx!: Date;

    @Field(() => String, {nullable:false})
    notaUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => String, {nullable:false})
    updatedBy!: string;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => Vendor, {nullable:false})
    vendor?: Vendor;

    @Field(() => PaymentMethod, {nullable:false})
    paymentMethod?: PaymentMethod;
}
