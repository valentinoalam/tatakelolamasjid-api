import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';

@InputType()
export class PositionNullableRelationFilter {

    @Field(() => PositionWhereInput, {nullable:true})
    is?: PositionWhereInput;

    @Field(() => PositionWhereInput, {nullable:true})
    isNot?: PositionWhereInput;
}
