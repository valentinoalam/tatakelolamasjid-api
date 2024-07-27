import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzCreateInput } from './ustadz-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUstadzArgs {

    @Field(() => UstadzCreateInput, {nullable:false})
    @Type(() => UstadzCreateInput)
    data!: UstadzCreateInput;
}
