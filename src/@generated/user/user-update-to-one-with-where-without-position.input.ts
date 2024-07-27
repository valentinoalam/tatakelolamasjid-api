import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPositionInput } from './user-update-without-position.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPositionInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPositionInput, {nullable:false})
    @Type(() => UserUpdateWithoutPositionInput)
    data!: UserUpdateWithoutPositionInput;
}
