import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorUpdateManyMutationInput } from './vendor-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VendorWhereInput } from './vendor-where.input';

@ArgsType()
export class UpdateManyVendorArgs {

    @Field(() => VendorUpdateManyMutationInput, {nullable:false})
    @Type(() => VendorUpdateManyMutationInput)
    data!: VendorUpdateManyMutationInput;

    @Field(() => VendorWhereInput, {nullable:true})
    @Type(() => VendorWhereInput)
    where?: VendorWhereInput;
}
