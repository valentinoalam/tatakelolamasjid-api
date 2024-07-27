import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PaymentMethodCount {

    @Field(() => Int, {nullable:false})
    Transaction?: number;
}
