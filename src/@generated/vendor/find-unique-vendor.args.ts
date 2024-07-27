import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueVendorArgs {

    @Field(() => VendorWhereUniqueInput, {nullable:false})
    @Type(() => VendorWhereUniqueInput)
    where!: Prisma.AtLeast<VendorWhereUniqueInput, 'id'>;
}
