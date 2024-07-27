import { CreatePaymentMethodInput } from './create-payment-method.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePaymentMethodInput extends PartialType(CreatePaymentMethodInput) {
  id: number;
}
