import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryUpdateManyMutationInput } from './account-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AccountCategoryWhereInput } from './account-category-where.input';

@ArgsType()
export class UpdateManyAccountCategoryArgs {

    @Field(() => AccountCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountCategoryUpdateManyMutationInput)
    data!: AccountCategoryUpdateManyMutationInput;

    @Field(() => AccountCategoryWhereInput, {nullable:true})
    @Type(() => AccountCategoryWhereInput)
    where?: AccountCategoryWhereInput;
}
