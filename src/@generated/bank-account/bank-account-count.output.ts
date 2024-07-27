import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BankAccountCount {

    @Field(() => Int, {nullable:false})
    Account?: number;
}
