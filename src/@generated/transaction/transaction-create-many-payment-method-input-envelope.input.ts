import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyPaymentMethodInput } from './transaction-create-many-payment-method.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyPaymentMethodInputEnvelope {

    @Field(() => [TransactionCreateManyPaymentMethodInput], {nullable:false})
    @Type(() => TransactionCreateManyPaymentMethodInput)
    data!: Array<TransactionCreateManyPaymentMethodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
