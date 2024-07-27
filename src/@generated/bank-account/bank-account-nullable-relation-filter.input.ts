import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankAccountWhereInput } from './bank-account-where.input';

@InputType()
export class BankAccountNullableRelationFilter {

    @Field(() => BankAccountWhereInput, {nullable:true})
    is?: BankAccountWhereInput;

    @Field(() => BankAccountWhereInput, {nullable:true})
    isNot?: BankAccountWhereInput;
}
