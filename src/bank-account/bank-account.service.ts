import { Injectable } from '@nestjs/common';
import { CreateBankAccountInput } from './dto/create-bank-account.input';
import { UpdateBankAccountInput } from './dto/update-bank-account.input';

@Injectable()
export class BankAccountService {
  create(createBankAccountInput: CreateBankAccountInput) {
    return 'This action adds a new bankAccount';
  }

  findAll() {
    return `This action returns all bankAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankAccount`;
  }

  update(id: number, updateBankAccountInput: UpdateBankAccountInput) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
