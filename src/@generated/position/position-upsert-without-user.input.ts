import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionUpdateWithoutUserInput } from './position-update-without-user.input';
import { Type } from 'class-transformer';
import { PositionCreateWithoutUserInput } from './position-create-without-user.input';
import { PositionWhereInput } from './position-where.input';

@InputType()
export class PositionUpsertWithoutUserInput {

    @Field(() => PositionUpdateWithoutUserInput, {nullable:false})
    @Type(() => PositionUpdateWithoutUserInput)
    update!: PositionUpdateWithoutUserInput;

    @Field(() => PositionCreateWithoutUserInput, {nullable:false})
    @Type(() => PositionCreateWithoutUserInput)
    create!: PositionCreateWithoutUserInput;

    @Field(() => PositionWhereInput, {nullable:true})
    @Type(() => PositionWhereInput)
    where?: PositionWhereInput;
}
