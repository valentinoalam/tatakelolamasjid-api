import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorUpdateInput } from './vendor-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';

@ArgsType()
export class UpdateOneVendorArgs {

    @Field(() => VendorUpdateInput, {nullable:false})
    @Type(() => VendorUpdateInput)
    data!: VendorUpdateInput;

    @Field(() => VendorWhereUniqueInput, {nullable:false})
    @Type(() => VendorWhereUniqueInput)
    where!: Prisma.AtLeast<VendorWhereUniqueInput, 'id'>;
}
