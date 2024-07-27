import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPositionInput } from '../user/user-create-nested-one-without-position.input';
import { EventCreateNestedOneWithoutCrewsInput } from '../event/event-create-nested-one-without-crews.input';

@InputType()
export class PositionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    periode!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPositionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPositionInput;

    @Field(() => EventCreateNestedOneWithoutCrewsInput, {nullable:true})
    event?: EventCreateNestedOneWithoutCrewsInput;
}
