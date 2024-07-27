import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Int } from '@nestjs/graphql';
import { AccountUncheckedCreateNestedManyWithoutParentInput } from './account-unchecked-create-nested-many-without-parent.input';
import { TransactionUncheckedCreateNestedManyWithoutAccountInput } from '../transaction/transaction-unchecked-create-nested-many-without-account.input';
import { TrialBalanceDetailUncheckedCreateNestedManyWithoutAccountInput } from '../trial-balance-detail/trial-balance-detail-unchecked-create-nested-many-without-account.input';

@InputType()
export class AccountUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    bankAccId!: string;

    @Field(() => String, {nullable:true})
    parentAccountId?: string;

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

    @Field(() => AccountUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: AccountUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    Transaction?: TransactionUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => TrialBalanceDetailUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailUncheckedCreateNestedManyWithoutAccountInput;
}
