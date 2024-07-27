import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerWhereInput } from './ledger-where.input';
import { Type } from 'class-transformer';
import { LedgerOrderByWithRelationInput } from './ledger-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LedgerScalarFieldEnum } from './ledger-scalar-field.enum';

@ArgsType()
export class FindFirstLedgerArgs {

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;

    @Field(() => [LedgerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LedgerOrderByWithRelationInput>;

    @Field(() => LedgerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LedgerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LedgerScalarFieldEnum>;
}
