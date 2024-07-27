import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventCreateInput } from './ustadz-event-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUstadzEventArgs {

    @Field(() => UstadzEventCreateInput, {nullable:false})
    @Type(() => UstadzEventCreateInput)
    data!: UstadzEventCreateInput;
}
