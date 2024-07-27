import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryCreateManyInput } from './account-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAccountCategoryArgs {

    @Field(() => [AccountCategoryCreateManyInput], {nullable:false})
    @Type(() => AccountCategoryCreateManyInput)
    data!: Array<AccountCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
