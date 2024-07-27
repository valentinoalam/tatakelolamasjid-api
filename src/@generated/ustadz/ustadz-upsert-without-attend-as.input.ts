import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzUpdateWithoutAttendAsInput } from './ustadz-update-without-attend-as.input';
import { Type } from 'class-transformer';
import { UstadzCreateWithoutAttendAsInput } from './ustadz-create-without-attend-as.input';
import { UstadzWhereInput } from './ustadz-where.input';

@InputType()
export class UstadzUpsertWithoutAttendAsInput {

    @Field(() => UstadzUpdateWithoutAttendAsInput, {nullable:false})
    @Type(() => UstadzUpdateWithoutAttendAsInput)
    update!: UstadzUpdateWithoutAttendAsInput;

    @Field(() => UstadzCreateWithoutAttendAsInput, {nullable:false})
    @Type(() => UstadzCreateWithoutAttendAsInput)
    create!: UstadzCreateWithoutAttendAsInput;

    @Field(() => UstadzWhereInput, {nullable:true})
    @Type(() => UstadzWhereInput)
    where?: UstadzWhereInput;
}
