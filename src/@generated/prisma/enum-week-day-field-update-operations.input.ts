import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeekDay } from './week-day.enum';

@InputType()
export class EnumWeekDayFieldUpdateOperationsInput {

    @Field(() => WeekDay, {nullable:true})
    set?: keyof typeof WeekDay;
}
