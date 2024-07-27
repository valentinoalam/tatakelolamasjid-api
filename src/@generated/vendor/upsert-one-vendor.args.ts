import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';
import { Type } from 'class-transformer';
import { VendorCreateInput } from './vendor-create.input';
import { VendorUpdateInput } from './vendor-update.input';

@ArgsType()
export class UpsertOneVendorArgs {

    @Field(() => VendorWhereUniqueInput, {nullable:false})
    @Type(() => VendorWhereUniqueInput)
    where!: Prisma.AtLeast<VendorWhereUniqueInput, 'id'>;

    @Field(() => VendorCreateInput, {nullable:false})
    @Type(() => VendorCreateInput)
    create!: VendorCreateInput;

    @Field(() => VendorUpdateInput, {nullable:false})
    @Type(() => VendorUpdateInput)
    update!: VendorUpdateInput;
}
