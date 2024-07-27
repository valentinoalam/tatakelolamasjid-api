import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';
import { Type } from 'class-transformer';
import { PositionUpdateWithoutUserInput } from './position-update-without-user.input';

@InputType()
export class PositionUpdateToOneWithWhereWithoutUserInput {

    @Field(() => PositionWhereInput, {nullable:true})
    @Type(() => PositionWhereInput)
    where?: PositionWhereInput;

    @Field(() => PositionUpdateWithoutUserInput, {nullable:false})
    @Type(() => PositionUpdateWithoutUserInput)
    data!: PositionUpdateWithoutUserInput;
}
