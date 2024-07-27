import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';
import { Type } from 'class-transformer';
import { UstadzUpdateWithoutAttendAsInput } from './ustadz-update-without-attend-as.input';

@InputType()
export class UstadzUpdateToOneWithWhereWithoutAttendAsInput {

    @Field(() => UstadzWhereInput, {nullable:true})
    @Type(() => UstadzWhereInput)
    where?: UstadzWhereInput;

    @Field(() => UstadzUpdateWithoutAttendAsInput, {nullable:false})
    @Type(() => UstadzUpdateWithoutAttendAsInput)
    data!: UstadzUpdateWithoutAttendAsInput;
}
