import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMemoInput } from './user-update-without-memo.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemoInput } from './user-create-without-memo.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMemoInput {

    @Field(() => UserUpdateWithoutMemoInput, {nullable:false})
    @Type(() => UserUpdateWithoutMemoInput)
    update!: UserUpdateWithoutMemoInput;

    @Field(() => UserCreateWithoutMemoInput, {nullable:false})
    @Type(() => UserCreateWithoutMemoInput)
    create!: UserCreateWithoutMemoInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
