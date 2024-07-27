import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeekDay } from './week-day.enum';
import { NestedEnumWeekDayFilter } from './nested-enum-week-day-filter.input';

@InputType()
export class EnumWeekDayFilter {

    @Field(() => WeekDay, {nullable:true})
    equals?: keyof typeof WeekDay;

    @Field(() => [WeekDay], {nullable:true})
    in?: Array<keyof typeof WeekDay>;

    @Field(() => [WeekDay], {nullable:true})
    notIn?: Array<keyof typeof WeekDay>;

    @Field(() => NestedEnumWeekDayFilter, {nullable:true})
    not?: NestedEnumWeekDayFilter;
}
