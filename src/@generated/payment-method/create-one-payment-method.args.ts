import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodCreateInput } from './payment-method-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePaymentMethodArgs {

    @Field(() => PaymentMethodCreateInput, {nullable:false})
    @Type(() => PaymentMethodCreateInput)
    data!: PaymentMethodCreateInput;
}
