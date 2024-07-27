import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateManyBankAccInput } from './account-create-many-bank-acc.input';
import { Type } from 'class-transformer';

@InputType()
export class AccountCreateManyBankAccInputEnvelope {

    @Field(() => [AccountCreateManyBankAccInput], {nullable:false})
    @Type(() => AccountCreateManyBankAccInput)
    data!: Array<AccountCreateManyBankAccInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
