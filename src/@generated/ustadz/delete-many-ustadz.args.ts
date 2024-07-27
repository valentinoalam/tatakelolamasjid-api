import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUstadzArgs {

    @Field(() => UstadzWhereInput, {nullable:true})
    @Type(() => UstadzWhereInput)
    where?: UstadzWhereInput;
}
