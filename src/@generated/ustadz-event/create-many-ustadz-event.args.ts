import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventCreateManyInput } from './ustadz-event-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUstadzEventArgs {

    @Field(() => [UstadzEventCreateManyInput], {nullable:false})
    @Type(() => UstadzEventCreateManyInput)
    data!: Array<UstadzEventCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
