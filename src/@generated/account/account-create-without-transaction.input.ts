import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Int } from '@nestjs/graphql';
import { BankAccountCreateNestedOneWithoutAccountInput } from '../bank-account/bank-account-create-nested-one-without-account.input';
import { AccountCreateNestedOneWithoutChildrenInput } from './account-create-nested-one-without-children.input';
import { AccountCreateNestedManyWithoutParentInput } from './account-create-nested-many-without-parent.input';
import { TrialBalanceDetailCreateNestedManyWithoutAccountInput } from '../trial-balance-detail/trial-balance-detail-create-nested-many-without-account.input';

@InputType()
export class AccountCreateWithoutTransactionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AccountType, {nullable:false})
    type!: keyof typeof AccountType;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    balance!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BankAccountCreateNestedOneWithoutAccountInput, {nullable:true})
    bankAcc?: BankAccountCreateNestedOneWithoutAccountInput;

    @Field(() => AccountCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: AccountCreateNestedOneWithoutChildrenInput;

    @Field(() => AccountCreateNestedManyWithoutParentInput, {nullable:true})
    children?: AccountCreateNestedManyWithoutParentInput;

    @Field(() => TrialBalanceDetailCreateNestedManyWithoutAccountInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailCreateNestedManyWithoutAccountInput;
}