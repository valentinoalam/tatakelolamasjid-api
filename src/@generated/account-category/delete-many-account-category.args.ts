import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCategoryWhereInput } from './account-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAccountCategoryArgs {

    @Field(() => AccountCategoryWhereInput, {nullable:true})
    @Type(() => AccountCategoryWhereInput)
    where?: AccountCategoryWhereInput;
}
