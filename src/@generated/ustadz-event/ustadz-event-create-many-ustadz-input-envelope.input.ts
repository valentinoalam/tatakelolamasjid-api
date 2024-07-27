import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateManyUstadzInput } from './ustadz-event-create-many-ustadz.input';
import { Type } from 'class-transformer';

@InputType()
export class UstadzEventCreateManyUstadzInputEnvelope {

    @Field(() => [UstadzEventCreateManyUstadzInput], {nullable:false})
    @Type(() => UstadzEventCreateManyUstadzInput)
    data!: Array<UstadzEventCreateManyUstadzInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
