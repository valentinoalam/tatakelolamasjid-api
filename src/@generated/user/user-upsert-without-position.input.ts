import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPositionInput } from './user-update-without-position.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPositionInput } from './user-create-without-position.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPositionInput {

    @Field(() => UserUpdateWithoutPositionInput, {nullable:false})
    @Type(() => UserUpdateWithoutPositionInput)
    update!: UserUpdateWithoutPositionInput;

    @Field(() => UserCreateWithoutPositionInput, {nullable:false})
    @Type(() => UserCreateWithoutPositionInput)
    create!: UserCreateWithoutPositionInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
