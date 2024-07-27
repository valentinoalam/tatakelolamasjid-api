import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Period } from './period.enum';

@InputType()
export class NestedEnumPeriodFilter {

    @Field(() => Period, {nullable:true})
    equals?: keyof typeof Period;

    @Field(() => [Period], {nullable:true})
    in?: Array<keyof typeof Period>;

    @Field(() => [Period], {nullable:true})
    notIn?: Array<keyof typeof Period>;

    @Field(() => NestedEnumPeriodFilter, {nullable:true})
    not?: NestedEnumPeriodFilter;
}
