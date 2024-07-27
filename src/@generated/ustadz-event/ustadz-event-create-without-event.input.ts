import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzCreateNestedOneWithoutAttendAsInput } from '../ustadz/ustadz-create-nested-one-without-attend-as.input';

@InputType()
export class UstadzEventCreateWithoutEventInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UstadzCreateNestedOneWithoutAttendAsInput, {nullable:false})
    Ustadz!: UstadzCreateNestedOneWithoutAttendAsInput;
}
