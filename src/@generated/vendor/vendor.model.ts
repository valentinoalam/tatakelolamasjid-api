import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Transaction } from '../transaction/transaction.model';
import { VendorCount } from './vendor-count.output';

@ObjectType()
export class Vendor {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Transaction], {nullable:true})
    transaction?: Array<Transaction>;

    @Field(() => VendorCount, {nullable:false})
    _count?: VendorCount;
}
