import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUncheckedCreateNestedManyWithoutBankAccInput } from '../account/account-unchecked-create-nested-many-without-bank-acc.input';

@InputType()
export class BankAccountUncheckedCreateInput {

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

    @Field(() => AccountUncheckedCreateNestedManyWithoutBankAccInput, {nullable:true})
    Account?: AccountUncheckedCreateNestedManyWithoutBankAccInput;
}
