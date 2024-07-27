import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodScalarWhereInput } from './payment-method-scalar-where.input';
import { Type } from 'class-transformer';
import { PaymentMethodUpdateManyMutationInput } from './payment-method-update-many-mutation.input';

@InputType()
export class PaymentMethodUpdateManyWithWhereWithoutUserInput {

    @Field(() => PaymentMethodScalarWhereInput, {nullable:false})
    @Type(() => PaymentMethodScalarWhereInput)
    where!: PaymentMethodScalarWhereInput;

    @Field(() => PaymentMethodUpdateManyMutationInput, {nullable:false})
    @Type(() => PaymentMethodUpdateManyMutationInput)
    data!: PaymentMethodUpdateManyMutationInput;
}
