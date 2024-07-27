import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodCreateManyInput } from './payment-method-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPaymentMethodArgs {

    @Field(() => [PaymentMethodCreateManyInput], {nullable:false})
    @Type(() => PaymentMethodCreateManyInput)
    data!: Array<PaymentMethodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
