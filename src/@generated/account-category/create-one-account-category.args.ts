import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryCreateInput } from './account-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAccountCategoryArgs {

    @Field(() => AccountCategoryCreateInput, {nullable:false})
    @Type(() => AccountCategoryCreateInput)
    data!: AccountCategoryCreateInput;
}
