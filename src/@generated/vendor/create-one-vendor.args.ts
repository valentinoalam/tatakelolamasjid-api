import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorCreateInput } from './vendor-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVendorArgs {

    @Field(() => VendorCreateInput, {nullable:false})
    @Type(() => VendorCreateInput)
    data!: VendorCreateInput;
}
