import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedOneWithoutSpeakersInput } from '../event/event-create-nested-one-without-speakers.input';

@InputType()
export class UstadzEventCreateWithoutUstadzInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EventCreateNestedOneWithoutSpeakersInput, {nullable:false})
    Event!: EventCreateNestedOneWithoutSpeakersInput;
}
