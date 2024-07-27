import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountWhereInput } from './bank-account-where.input';
import { Type } from 'class-transformer';
import { BankAccountOrderByWithRelationInput } from './bank-account-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BankAccountScalarFieldEnum } from './bank-account-scalar-field.enum';

@ArgsType()
export class FindManyBankAccountArgs {

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;

    @Field(() => [BankAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BankAccountOrderByWithRelationInput>;

    @Field(() => BankAccountWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BankAccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
