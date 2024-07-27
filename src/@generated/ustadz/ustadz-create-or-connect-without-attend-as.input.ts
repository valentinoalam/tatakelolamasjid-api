import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzCreateWithoutAttendAsInput } from './ustadz-create-without-attend-as.input';

@InputType()
export class UstadzCreateOrConnectWithoutAttendAsInput {

    @Field(() => UstadzWhereUniqueInput, {nullable:false})
    @Type(() => UstadzWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;

    @Field(() => UstadzCreateWithoutAttendAsInput, {nullable:false})
    @Type(() => UstadzCreateWithoutAttendAsInput)
    create!: UstadzCreateWithoutAttendAsInput;
}
