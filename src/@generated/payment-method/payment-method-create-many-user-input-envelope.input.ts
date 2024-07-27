import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodCreateManyUserInput } from './payment-method-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentMethodCreateManyUserInputEnvelope {

    @Field(() => [PaymentMethodCreateManyUserInput], {nullable:false})
    @Type(() => PaymentMethodCreateManyUserInput)
    data!: Array<PaymentMethodCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
