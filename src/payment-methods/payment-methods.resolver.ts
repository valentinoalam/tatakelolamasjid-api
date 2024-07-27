import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodInput } from './dto/create-payment-method.input';
import { UpdatePaymentMethodInput } from './dto/update-payment-method.input';

@Resolver('PaymentMethod')
export class PaymentMethodsResolver {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Mutation('createPaymentMethod')
  create(@Args('createPaymentMethodInput') createPaymentMethodInput: CreatePaymentMethodInput) {
    return this.paymentMethodsService.create(createPaymentMethodInput);
  }

  @Query('paymentMethods')
  findAll() {
    return this.paymentMethodsService.findAll();
  }

  @Query('paymentMethod')
  findOne(@Args('id') id: number) {
    return this.paymentMethodsService.findOne(id);
  }

  @Mutation('updatePaymentMethod')
  update(@Args('updatePaymentMethodInput') updatePaymentMethodInput: UpdatePaymentMethodInput) {
    return this.paymentMethodsService.update(updatePaymentMethodInput.id, updatePaymentMethodInput);
  }

  @Mutation('removePaymentMethod')
  remove(@Args('id') id: number) {
    return this.paymentMethodsService.remove(id);
  }
}
