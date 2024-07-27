import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzCreateManyInput } from './ustadz-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUstadzArgs {

    @Field(() => [UstadzCreateManyInput], {nullable:false})
    @Type(() => UstadzCreateManyInput)
    data!: Array<UstadzCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
