import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyVendorInput } from './transaction-create-many-vendor.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyVendorInputEnvelope {

    @Field(() => [TransactionCreateManyVendorInput], {nullable:false})
    @Type(() => TransactionCreateManyVendorInput)
    data!: Array<TransactionCreateManyVendorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
