import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';

@InputType()
export class PaymentMethodRelationFilter {

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    is?: PaymentMethodWhereInput;

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    isNot?: PaymentMethodWhereInput;
}
