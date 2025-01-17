import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountNullableRelationFilter {

    @Field(() => AccountWhereInput, {nullable:true})
    is?: AccountWhereInput;

    @Field(() => AccountWhereInput, {nullable:true})
    isNot?: AccountWhereInput;
}
