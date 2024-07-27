import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountUpdateManyMutationInput } from './bank-account-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BankAccountWhereInput } from './bank-account-where.input';

@ArgsType()
export class UpdateManyBankAccountArgs {

    @Field(() => BankAccountUpdateManyMutationInput, {nullable:false})
    @Type(() => BankAccountUpdateManyMutationInput)
    data!: BankAccountUpdateManyMutationInput;

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;
}
