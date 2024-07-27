import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorCreateManyInput } from './vendor-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVendorArgs {

    @Field(() => [VendorCreateManyInput], {nullable:false})
    @Type(() => VendorCreateManyInput)
    data!: Array<VendorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
