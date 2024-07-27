import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodCreateWithoutUserInput } from './payment-method-create-without-user.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateOrConnectWithoutUserInput } from './payment-method-create-or-connect-without-user.input';
import { PaymentMethodUpsertWithWhereUniqueWithoutUserInput } from './payment-method-upsert-with-where-unique-without-user.input';
import { PaymentMethodCreateManyUserInputEnvelope } from './payment-method-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { PaymentMethodUpdateWithWhereUniqueWithoutUserInput } from './payment-method-update-with-where-unique-without-user.input';
import { PaymentMethodUpdateManyWithWhereWithoutUserInput } from './payment-method-update-many-with-where-without-user.input';
import { PaymentMethodScalarWhereInput } from './payment-method-scalar-where.input';

@InputType()
export class PaymentMethodUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [PaymentMethodCreateWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodCreateWithoutUserInput)
    create?: Array<PaymentMethodCreateWithoutUserInput>;

    @Field(() => [PaymentMethodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PaymentMethodCreateOrConnectWithoutUserInput>;

    @Field(() => [PaymentMethodUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PaymentMethodUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PaymentMethodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PaymentMethodCreateManyUserInputEnvelope)
    createMany?: PaymentMethodCreateManyUserInputEnvelope;

    @Field(() => [PaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>>;

    @Field(() => [PaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>>;

    @Field(() => [PaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>>;

    @Field(() => [PaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>>;

    @Field(() => [PaymentMethodUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PaymentMethodUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PaymentMethodUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PaymentMethodUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PaymentMethodScalarWhereInput], {nullable:true})
    @Type(() => PaymentMethodScalarWhereInput)
    deleteMany?: Array<PaymentMethodScalarWhereInput>;
}
