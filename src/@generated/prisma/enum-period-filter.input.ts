import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Period } from './period.enum';
import { NestedEnumPeriodFilter } from './nested-enum-period-filter.input';

@InputType()
export class EnumPeriodFilter {

    @Field(() => Period, {nullable:true})
    equals?: keyof typeof Period;

    @Field(() => [Period], {nullable:true})
    in?: Array<keyof typeof Period>;

    @Field(() => [Period], {nullable:true})
    notIn?: Array<keyof typeof Period>;

    @Field(() => NestedEnumPeriodFilter, {nullable:true})
    not?: NestedEnumPeriodFilter;
}
