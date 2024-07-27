import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    bankAccId?: string;

    @Field(() => String, {nullable:true})
    parentAccountId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AccountType, {nullable:true})
    type?: keyof typeof AccountType;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    balance?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
