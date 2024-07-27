import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Period } from './period.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPeriodFilter } from './nested-enum-period-filter.input';

@InputType()
export class NestedEnumPeriodWithAggregatesFilter {

    @Field(() => Period, {nullable:true})
    equals?: keyof typeof Period;

    @Field(() => [Period], {nullable:true})
    in?: Array<keyof typeof Period>;

    @Field(() => [Period], {nullable:true})
    notIn?: Array<keyof typeof Period>;

    @Field(() => NestedEnumPeriodWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPeriodWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPeriodFilter, {nullable:true})
    _min?: NestedEnumPeriodFilter;

    @Field(() => NestedEnumPeriodFilter, {nullable:true})
    _max?: NestedEnumPeriodFilter;
}
