import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodUpdateManyMutationInput } from './payment-method-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PaymentMethodWhereInput } from './payment-method-where.input';

@ArgsType()
export class UpdateManyPaymentMethodArgs {

    @Field(() => PaymentMethodUpdateManyMutationInput, {nullable:false})
    @Type(() => PaymentMethodUpdateManyMutationInput)
    data!: PaymentMethodUpdateManyMutationInput;

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    @Type(() => PaymentMethodWhereInput)
    where?: PaymentMethodWhereInput;
}
