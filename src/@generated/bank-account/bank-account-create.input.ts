import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateNestedManyWithoutBankAccInput } from '../account/account-create-nested-many-without-bank-acc.input';

@InputType()
export class BankAccountCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    accountNumber!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AccountCreateNestedManyWithoutBankAccInput, {nullable:true})
    Account?: AccountCreateNestedManyWithoutBankAccInput;
}
