import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeekDay } from './week-day.enum';

@InputType()
export class NestedEnumWeekDayFilter {

    @Field(() => WeekDay, {nullable:true})
    equals?: keyof typeof WeekDay;

    @Field(() => [WeekDay], {nullable:true})
    in?: Array<keyof typeof WeekDay>;

    @Field(() => [WeekDay], {nullable:true})
    notIn?: Array<keyof typeof WeekDay>;

    @Field(() => NestedEnumWeekDayFilter, {nullable:true})
    not?: NestedEnumWeekDayFilter;
}
