import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMemoInput } from './user-update-without-memo.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMemoInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMemoInput, {nullable:false})
    @Type(() => UserUpdateWithoutMemoInput)
    data!: UserUpdateWithoutMemoInput;
}
