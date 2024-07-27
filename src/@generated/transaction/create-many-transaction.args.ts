import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionCreateManyInput } from './transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTransactionArgs {

    @Field(() => [TransactionCreateManyInput], {nullable:false})
    @Type(() => TransactionCreateManyInput)
    data!: Array<TransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
