import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Period } from './period.enum';

@InputType()
export class EnumPeriodFieldUpdateOperationsInput {

    @Field(() => Period, {nullable:true})
    set?: keyof typeof Period;
}
