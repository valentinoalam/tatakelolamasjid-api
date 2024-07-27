import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => String, {nullable:true})
    vendorId?: string;

    @Field(() => String, {nullable:true})
    paymentMethodId?: string;

    @Field(() => TransactionType, {nullable:true})
    type?: keyof typeof TransactionType;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    reference?: string;

    @Field(() => Date, {nullable:true})
    dtTrx?: Date | string;

    @Field(() => String, {nullable:true})
    notaUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
