import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzCreateWithoutAttendAsInput } from './ustadz-create-without-attend-as.input';
import { Type } from 'class-transformer';
import { UstadzCreateOrConnectWithoutAttendAsInput } from './ustadz-create-or-connect-without-attend-as.input';
import { UstadzUpsertWithoutAttendAsInput } from './ustadz-upsert-without-attend-as.input';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';
import { UstadzUpdateToOneWithWhereWithoutAttendAsInput } from './ustadz-update-to-one-with-where-without-attend-as.input';

@InputType()
export class UstadzUpdateOneRequiredWithoutAttendAsNestedInput {

    @Field(() => UstadzCreateWithoutAttendAsInput, {nullable:true})
    @Type(() => UstadzCreateWithoutAttendAsInput)
    create?: UstadzCreateWithoutAttendAsInput;

    @Field(() => UstadzCreateOrConnectWithoutAttendAsInput, {nullable:true})
    @Type(() => UstadzCreateOrConnectWithoutAttendAsInput)
    connectOrCreate?: UstadzCreateOrConnectWithoutAttendAsInput;

    @Field(() => UstadzUpsertWithoutAttendAsInput, {nullable:true})
    @Type(() => UstadzUpsertWithoutAttendAsInput)
    upsert?: UstadzUpsertWithoutAttendAsInput;

    @Field(() => UstadzWhereUniqueInput, {nullable:true})
    @Type(() => UstadzWhereUniqueInput)
    connect?: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;

    @Field(() => UstadzUpdateToOneWithWhereWithoutAttendAsInput, {nullable:true})
    @Type(() => UstadzUpdateToOneWithWhereWithoutAttendAsInput)
    update?: UstadzUpdateToOneWithWhereWithoutAttendAsInput;
}
