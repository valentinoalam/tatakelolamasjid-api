import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateManyParentInput } from './account-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class AccountCreateManyParentInputEnvelope {

    @Field(() => [AccountCreateManyParentInput], {nullable:false})
    @Type(() => AccountCreateManyParentInput)
    data!: Array<AccountCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
