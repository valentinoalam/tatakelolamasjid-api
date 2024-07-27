import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventUncheckedCreateNestedManyWithoutUstadzInput } from '../ustadz-event/ustadz-event-unchecked-create-nested-many-without-ustadz.input';

@InputType()
export class UstadzUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => UstadzEventUncheckedCreateNestedManyWithoutUstadzInput, {nullable:true})
    attendAs?: UstadzEventUncheckedCreateNestedManyWithoutUstadzInput;
}
