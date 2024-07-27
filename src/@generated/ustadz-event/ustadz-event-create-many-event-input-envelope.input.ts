import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateManyEventInput } from './ustadz-event-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class UstadzEventCreateManyEventInputEnvelope {

    @Field(() => [UstadzEventCreateManyEventInput], {nullable:false})
    @Type(() => UstadzEventCreateManyEventInput)
    data!: Array<UstadzEventCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
