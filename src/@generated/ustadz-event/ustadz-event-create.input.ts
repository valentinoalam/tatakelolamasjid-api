import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzCreateNestedOneWithoutAttendAsInput } from '../ustadz/ustadz-create-nested-one-without-attend-as.input';
import { EventCreateNestedOneWithoutSpeakersInput } from '../event/event-create-nested-one-without-speakers.input';

@InputType()
export class UstadzEventCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UstadzCreateNestedOneWithoutAttendAsInput, {nullable:false})
    Ustadz!: UstadzCreateNestedOneWithoutAttendAsInput;

    @Field(() => EventCreateNestedOneWithoutSpeakersInput, {nullable:false})
    Event!: EventCreateNestedOneWithoutSpeakersInput;
}
