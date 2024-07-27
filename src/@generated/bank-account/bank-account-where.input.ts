import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AccountListRelationFilter } from '../account/account-list-relation-filter.input';

@InputType()
export class BankAccountWhereInput {

    @Field(() => [BankAccountWhereInput], {nullable:true})
    AND?: Array<BankAccountWhereInput>;

    @Field(() => [BankAccountWhereInput], {nullable:true})
    OR?: Array<BankAccountWhereInput>;

    @Field(() => [BankAccountWhereInput], {nullable:true})
    NOT?: Array<BankAccountWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bankName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    accountNumber?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => AccountListRelationFilter, {nullable:true})
    Account?: AccountListRelationFilter;
}
