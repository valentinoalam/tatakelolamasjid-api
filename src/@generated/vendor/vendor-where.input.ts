import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class VendorWhereInput {

    @Field(() => [VendorWhereInput], {nullable:true})
    AND?: Array<VendorWhereInput>;

    @Field(() => [VendorWhereInput], {nullable:true})
    OR?: Array<VendorWhereInput>;

    @Field(() => [VendorWhereInput], {nullable:true})
    NOT?: Array<VendorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    businessField?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    note?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transaction?: TransactionListRelationFilter;
}
