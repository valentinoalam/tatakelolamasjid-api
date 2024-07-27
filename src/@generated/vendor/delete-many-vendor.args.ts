import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorWhereInput } from './vendor-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVendorArgs {

    @Field(() => VendorWhereInput, {nullable:true})
    @Type(() => VendorWhereInput)
    where?: VendorWhereInput;
}
