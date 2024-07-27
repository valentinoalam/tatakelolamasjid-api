import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPaymentMethodArgs {

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    @Type(() => PaymentMethodWhereInput)
    where?: PaymentMethodWhereInput;
}
