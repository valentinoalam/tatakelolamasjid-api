import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventScalarWhereInput } from './ustadz-event-scalar-where.input';
import { Type } from 'class-transformer';
import { UstadzEventUpdateManyMutationInput } from './ustadz-event-update-many-mutation.input';

@InputType()
export class UstadzEventUpdateManyWithWhereWithoutUstadzInput {

    @Field(() => UstadzEventScalarWhereInput, {nullable:false})
    @Type(() => UstadzEventScalarWhereInput)
    where!: UstadzEventScalarWhereInput;

    @Field(() => UstadzEventUpdateManyMutationInput, {nullable:false})
    @Type(() => UstadzEventUpdateManyMutationInput)
    data!: UstadzEventUpdateManyMutationInput;
}
