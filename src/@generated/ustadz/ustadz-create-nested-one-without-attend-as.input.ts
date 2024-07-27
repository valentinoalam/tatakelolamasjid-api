import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzCreateWithoutAttendAsInput } from './ustadz-create-without-attend-as.input';
import { Type } from 'class-transformer';
import { UstadzCreateOrConnectWithoutAttendAsInput } from './ustadz-create-or-connect-without-attend-as.input';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';

@InputType()
export class UstadzCreateNestedOneWithoutAttendAsInput {

    @Field(() => UstadzCreateWithoutAttendAsInput, {nullable:true})
    @Type(() => UstadzCreateWithoutAttendAsInput)
    create?: UstadzCreateWithoutAttendAsInput;

    @Field(() => UstadzCreateOrConnectWithoutAttendAsInput, {nullable:true})
    @Type(() => UstadzCreateOrConnectWithoutAttendAsInput)
    connectOrCreate?: UstadzCreateOrConnectWithoutAttendAsInput;

    @Field(() => UstadzWhereUniqueInput, {nullable:true})
    @Type(() => UstadzWhereUniqueInput)
    connect?: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;
}
