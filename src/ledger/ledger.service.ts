import { Injectable } from '@nestjs/common';
import { CreateLedgerInput } from './dto/create-ledger.input';
import { UpdateLedgerInput } from './dto/update-ledger.input';

@Injectable()
export class LedgerService {
  create(createLedgerInput: CreateLedgerInput) {
    return 'This action adds a new ledger';
  }

  findAll() {
    return `This action returns all ledger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ledger`;
  }

  update(id: number, updateLedgerInput: UpdateLedgerInput) {
    return `This action updates a #${id} ledger`;
  }

  remove(id: number) {
    return `This action removes a #${id} ledger`;
  }
}
