import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeekDay } from './week-day.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWeekDayFilter } from './nested-enum-week-day-filter.input';

@InputType()
export class NestedEnumWeekDayWithAggregatesFilter {

    @Field(() => WeekDay, {nullable:true})
    equals?: keyof typeof WeekDay;

    @Field(() => [WeekDay], {nullable:true})
    in?: Array<keyof typeof WeekDay>;

    @Field(() => [WeekDay], {nullable:true})
    notIn?: Array<keyof typeof WeekDay>;

    @Field(() => NestedEnumWeekDayWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWeekDayWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWeekDayFilter, {nullable:true})
    _min?: NestedEnumWeekDayFilter;

    @Field(() => NestedEnumWeekDayFilter, {nullable:true})
    _max?: NestedEnumWeekDayFilter;
}
