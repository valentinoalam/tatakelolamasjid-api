import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';

@InputType()
export class PaymentMethodListRelationFilter {

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    every?: PaymentMethodWhereInput;

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    some?: PaymentMethodWhereInput;

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    none?: PaymentMethodWhereInput;
}
