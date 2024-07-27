import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodInput } from './dto/create-payment-method.input';
import { UpdatePaymentMethodInput } from './dto/update-payment-method.input';

@Injectable()
export class PaymentMethodsService {
  create(createPaymentMethodInput: CreatePaymentMethodInput) {
    return 'This action adds a new paymentMethod';
  }

  findAll() {
    return `This action returns all paymentMethods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentMethod`;
  }

  update(id: number, updatePaymentMethodInput: UpdatePaymentMethodInput) {
    return `This action updates a #${id} paymentMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentMethod`;
  }
}
