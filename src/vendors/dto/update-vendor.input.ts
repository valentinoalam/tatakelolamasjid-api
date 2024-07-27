import { CreateVendorInput } from './create-vendor.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateVendorInput extends PartialType(CreateVendorInput) {
  id: number;
}
