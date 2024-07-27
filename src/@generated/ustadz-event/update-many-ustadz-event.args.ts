import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventUpdateManyMutationInput } from './ustadz-event-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UstadzEventWhereInput } from './ustadz-event-where.input';

@ArgsType()
export class UpdateManyUstadzEventArgs {

    @Field(() => UstadzEventUpdateManyMutationInput, {nullable:false})
    @Type(() => UstadzEventUpdateManyMutationInput)
    data!: UstadzEventUpdateManyMutationInput;

    @Field(() => UstadzEventWhereInput, {nullable:true})
    @Type(() => UstadzEventWhereInput)
    where?: UstadzEventWhereInput;
}
