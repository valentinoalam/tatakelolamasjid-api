import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VendorsService } from './vendors.service';
import { CreateVendorInput } from './dto/create-vendor.input';
import { UpdateVendorInput } from './dto/update-vendor.input';

@Resolver('Vendor')
export class VendorsResolver {
  constructor(private readonly vendorsService: VendorsService) {}

  @Mutation('createVendor')
  create(@Args('createVendorInput') createVendorInput: CreateVendorInput) {
    return this.vendorsService.create(createVendorInput);
  }

  @Query('vendors')
  findAll() {
    return this.vendorsService.findAll();
  }

  @Query('vendor')
  findOne(@Args('id') id: number) {
    return this.vendorsService.findOne(id);
  }

  @Mutation('updateVendor')
  update(@Args('updateVendorInput') updateVendorInput: UpdateVendorInput) {
    return this.vendorsService.update(updateVendorInput.id, updateVendorInput);
  }

  @Mutation('removeVendor')
  remove(@Args('id') id: number) {
    return this.vendorsService.remove(id);
  }
}
