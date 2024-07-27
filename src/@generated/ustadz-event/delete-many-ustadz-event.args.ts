import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventWhereInput } from './ustadz-event-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUstadzEventArgs {

    @Field(() => UstadzEventWhereInput, {nullable:true})
    @Type(() => UstadzEventWhereInput)
    where?: UstadzEventWhereInput;
}
