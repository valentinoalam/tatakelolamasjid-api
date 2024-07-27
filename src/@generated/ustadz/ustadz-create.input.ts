import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateNestedManyWithoutUstadzInput } from '../ustadz-event/ustadz-event-create-nested-many-without-ustadz.input';

@InputType()
export class UstadzCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => UstadzEventCreateNestedManyWithoutUstadzInput, {nullable:true})
    attendAs?: UstadzEventCreateNestedManyWithoutUstadzInput;
}
