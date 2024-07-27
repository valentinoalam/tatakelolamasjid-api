import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VendorWhereInput } from './vendor-where.input';

@InputType()
export class VendorRelationFilter {

    @Field(() => VendorWhereInput, {nullable:true})
    is?: VendorWhereInput;

    @Field(() => VendorWhereInput, {nullable:true})
    isNot?: VendorWhereInput;
}
