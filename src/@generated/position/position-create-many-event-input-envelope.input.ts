import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateManyEventInput } from './position-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class PositionCreateManyEventInputEnvelope {

    @Field(() => [PositionCreateManyEventInput], {nullable:false})
    @Type(() => PositionCreateManyEventInput)
    data!: Array<PositionCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
